import { paginate } from './paginator'
import { withPagination } from '../validation/hono-pagination'
import { validator } from 'hono/validator'
import { queries } from '../queries'

const bookIdValidator = validator('param', async (value, c) => {
	const book_id = value.id

	if (!book_id) {
		throw new Error('Missing book ID')
	}

	const [book] = (await queries.book_by_id(c.sql, book_id)) ?? [null]

	if (book) {
		return {
			book_id,
			book,
		}
	}

	c.trouble.add('id', 'No book matched ID.')
	return { book_id }
})

async function bookBodyValidation(value, c) {
	const validated = {}
	const { book_id } = c.req.valid('param') ?? -1

	if (value.work_key) {
		validated.work_key = value.work_key
	}

	const title = (value.title || '').trim()
	if (!title) {
		c.trouble.add('title', 'Title required')
	} else {
		const alreadyTaken = await queries.book_by_title(c.sql, title)

		if (alreadyTaken && String(book_id) !== String(alreadyTaken[0].book_id)) {
			c.trouble.add('title', 'Title already in catalog.')
		} else {
			validated.title = title
		}
	}

	const author_id = (String(value.author_id) || '').trim()
	if (!author_id) {
		c.trouble.add('author_id', 'No author indicated.')
	} else {
		const author = await queries.author_by_id(c.sql, author_id)

		if (!author) {
			c.trouble.add('author_id', 'Invalid author.')
		} else {
			validated.author_id = author_id
			validated.author = author
		}
	}

	if (typeof value.isbn === 'string') {
		validated.isbn = value.isbn.trim()
	}

	if (value.summary) {
		validated.summary = value.summary
	}

	// Genres: extract from keys starting with 'genre'
	const genreKeys = Object.keys(value).filter((k) => k.startsWith('genre'))
	const genreList = genreKeys
		.map((k) => {
			const match = k.match(/genre-(\d+)/)
			return match ? match[1] : null
		})
		.filter(Boolean)

	const allGenres = (await queries.all_genre_ids(c.sql))[0]?.all_ids
		?.slice(1, -1)
		.split(',')
	const validGenres = new Set(allGenres)

	// Optimistic assignment:
	validated.genreList = genreList

	for (const g of genreList) {
		if (!validGenres.has(g)) {
			c.trouble.add('genre', `Invalid genre ID: ${g}`)
			delete validated.genreList
		}
	}

	return validated
}
const bookFormValidator = validator('form', async (value, c) => {
	return await bookBodyValidation(value, c)
})
const bookJsonValidator = validator('json', async (value, c) => {
	return await bookBodyValidation(value, c)
})

export const bookController = {
	async index(c) {
		const results = await queries.catalog(c.sql)

		return c.render('catalog_active_home.hbs', {
			title: 'Archivia',
			book_count: results[0],
			author_count: results[1],
			genre_count: results[2],
			recent_books: results[3],
		})
	},

	book_list: [
		withPagination,
		async (c, next) => {
			const { page, limit } = c.req.valid('query')
			const search = c.req.query('q') || null

			if (search) {
				const matches = await queries.trigramTitleQuery(c.sql, search)

				return c.render('book_list.hbs', {
					books: matches,
					noResults: !Boolean(matches.length),
					total: matches.length,
					allResults: true,
					populate: { search },
				})
			}

			const [bookList, total] = await queries.catalog_books(c.sql, limit, page)

			const position = paginate(page, limit, total)

			return c.render('book_list.hbs', {
				books: bookList,
				noResults: !bookList,
				...position,
			})
		},
	],

	async book_detail(c) {
		const book_id = c.req.param('id')

		const [resultBook, resultInstances, resultGenres] =
			await queries.book_detail(c.sql, book_id)

		if (!resultBook) {
			return c.render(`no_results.hbs`)
		}

		// Separate paragraphs into array elements:
		if (resultBook[0].summary) {
			resultBook[0].summary = resultBook[0].summary.split(/\n+/)
		}

		return c.render(`book_detail.hbs`, {
			book_info: resultBook[0],
			instances: resultInstances,
			genre_info: resultGenres,
		})
	},

	book_update_get: [
		bookIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/books`)
			}
			const { book_id, book } = c.req.valid('param')

			const genreChecks = await queries.book_genre_checks(c.sql, book_id)

			return c.render(`book_form.hbs`, {
				genres: [],
				authors: [],
				title: 'Edit Book',
				form_action: undefined,
				submit: 'Save Changes',
				populate: book,
				genreChecks,
			})
		},
	],

	book_update_post: [
		bookIdValidator,
		bookFormValidator,
		async (c) => {
			const { title, isbn, author_id, summary, genreList } = c.req.valid('form')
			const { book_id } = c.req.valid('param')
			const item = { title, isbn, author_id, summary }
			item.summary ??= null
			item.isbn ??= null

			if (!c.trouble.isEmpty()) {
				if (c.trouble.array().find((e) => e.param === 'id')) {
					return res.redirect(`/catalog/books`)
				}

				return c.render(
					`book_form.hbs`,
					{
						trouble: c.trouble.array(),
						title: 'Edit Book',
						form_action: undefined,
						submit: 'Save Changes',
						populate: item,
						genreChecks: genreList?.map((g) => ({ genre_id: parseInt(g) })) ?? [],
					},
					400
				)
			}

			// Remove the old book_genres table entries
			await queries.delete_book_genre_by_book_id(c.sql, book_id)
			const [resultBook] = await queries.update_book(
				c.sql,
				book_id,
				item.title,
				item.isbn,
				item.author_id,
				item.summary
			)

			const inserts = genreList.map(genre_id => ({book_id, genre_id}))
			await queries.insert_book_genres(c.sql, inserts)

			return c.redirect(resultBook.book_url)
		},
	],

	book_delete_get: [
		bookIdValidator,
		async (c) => {
			const { book_id, book } = c.req.valid('param')

			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/book/delete`)
			}

			const instances = await queries.instances_by_book_id(c.sql, book_id)

			return c.render(`book_delete.hbs`, {
				book,
				instances,
			})
		},
	],

	book_delete_post: [
		bookIdValidator,
		async (c) => {
			const { book_id } = c.req.valid('param')

			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/book/delete`)
			}

			await queries.delete_book(c.sql, book_id)

			return c.redirect(`/catalog/books`)
		},
	],

	async book_create_get(c) {
		return c.render(`book_form.hbs`, {
			populate: { author_id: -1 },
			title: 'Add Book',
			form_action: '/catalog/book/create',
			submit: 'Create',
		})
	},

	book_create_post: [
		bookFormValidator,
		async (c) => {
			const { title, isbn, author_id, summary, genreList } = c.req.valid('form')
			const item = { title, isbn, author_id, summary }
			item.summary ??= null
			item.isbn ??= null

			if (!c.trouble.isEmpty()) {

				return c.render(
					`book_form.hbs`,
					{
						trouble: c.trouble.array(),
						title: 'Add Book',
						form_action: '/catalog/book/create',
						submit: 'Create',
						populate: item,
						genreChecks: genreList?.map((g) => ({ genre_id: parseInt(g) })) ?? [],
					},
					400
				)
			}

			// Having passed validation, create the new book.
			const result = await queries.create_book(c.sql, item.title, item.isbn, item.author_id, item.summary)

			// Start a lookup on OpenLibrary,
			// add this book to the recent works spotlight if it looks good.
			c.executionCtx.waitUntil(
				suggestBook(
					c.sql,
					result[0].title,
					(
						await queries.author_full_name_by_id(c.sql, result[0].author_id)
					)[0].full_name,
					result[0].book_id
				)
			)

			// Also need to insert into genre/book junction table
			const book_id = result[0].book_id
			const inserts = genreList.map(genre_id => ({book_id, genre_id}))

			await queries.insert_book_genres(c.sql, inserts)


			return c.redirect(result[0].book_url)
		},
	],

	async book_import_get(c) {
		return c.render(`import_book.hbs`, { title: 'Import book' })
	},

	book_json_post: [
		bookJsonValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.json({ trouble: c.trouble.array() }, { status: 400 })
			}

			const item = {
				title: c.req.valid('json').title,
				isbn: c.req.valid('json').isbn || null,
				author_id: c.req.valid('json').author_id,
				summary: c.req.valid('json').summary || null,
			}

			// Having passed validation, create the new book.
			const result = await queries.create_book(c.sql, item.title, item.isbn, item.author_id, item.summary)

			// Consider including the book in the recently-added list:
			c.executionCtx.waitUntil(
				suggestRecent(
					c.sql,
					c.req.valid('json').work_key,
					result[0].book_id
				)
			)

			return c.json(result[0], { status: 201 })
		},
	],

	async books_with_ids(c) {
		const list = await queries.books_with_ids(c.sql)
		return c.json(list)
	},
}

async function suggestBook(sql, title, author, book_id) {
		log(
			`🔍 Attempting book lookup for "${title}" by ${author}` +
				` with book_id ${book_id}`
		)

		try {
			const searchUrl = new URL('https://openlibrary.org/search.json')
			searchUrl.searchParams.set('title', title)
			searchUrl.searchParams.set('author', author)
			searchUrl.searchParams.set('fields', 'key')
			searchUrl.searchParams.set('limit', '1')

			const searchRes = await fetch(searchUrl.toString())
			if (!searchRes.ok) {
				log(`❌🔍 Search request failed for ${title}`)
				throw new Error(`Search request failed: ${searchRes.status}`)
			}

			log(`🔍 Search request retrieved for ${title}...`)

			const searchData = await searchRes.json()

			if (!searchData.docs || searchData.docs.length === 0) {
				log(`❌🔍 No docs available for ${title}`)
				return
			}

			const workKey = searchData.docs[0].key

			const workRes = await fetch(`https://openlibrary.org${workKey}.json`)
			if (!workRes.ok) {
				log(`❌🔍 Unable to retrieve work record for ${title}`)
				throw new Error(`Work request failed: ${workRes.status}`)
			}

			const workData = await workRes.json()

			log(`🔍 Checking covers for ${title}...`)
			const firstCover = workData.covers?.[0]

			if (firstCover > 0) {
				log('🔍 Work accepted. Adding to spotlight queue...', green)
				await queries.insert_spotlight_work(sql, firstCover, book_id)
				
			}
		} catch (e) {
			log.err(e.message)
		}
}

async function suggestRecent(sql, workKey, book_id) {
	const minDescriptionLength = 200
	if (typeof workKey !== 'string') return

	try {
		const url = `https://openlibrary.org${workKey}.json`
		log('Considering ', url)

		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error, ${response.status}`)
		}

		const data = await response.json()

		if (!Array.isArray(data.covers)) {
			log(`Rejecting suggestion (no covers available for ${workKey})`, pink)
			return
		}

		const firstCover = data.covers[0]
		const parsed = parseDescription(data.description)

		if (firstCover > 0 && parsed.length > minDescriptionLength) {
			log('🔍 Suggested work looks good.', yellow)
			await queries.insert_spotlight_work(sql, firstCover, book_id)
			
		} else {
			log("🔍 This text doesn't look like a good candidate.", pink)
		}
	} catch (e) {
		log.err(e.message)
	} 

	function parseDescription(description) {
		if (!description) return 'No description available.'
		if (typeof description === 'string') return description
		return description.value || 'Unrecognized format.'
	}
}
