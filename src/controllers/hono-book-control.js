const {
	books,
	justBooks,
	authors,
	genres,
	bookInstances,
	genresByBook,
	bookGenres,
	spotlightWorks,
	suggestions,
	trigramTitleQuery,
} = require('../database.js')
const {
	paginate,
	sanitizePagination,
	includePagination,
} = require('./paginator.js')
import { withPagination } from '../validation/hono-pagination'
import { validator } from 'hono/validator'

const bookIdValidator = validator('param', async (value, c) => {
	const book_id = value.id

	if (!book_id) {
		throw new Error('Missing book ID')
	}

	const book = await books.find(c.client, { book_id })

	if (book) {
		return {
			book_id,
			book,
		}
	}

	c.trouble.add('id', 'No book matched ID.')
	return { book_id }
})

const bookFormValidator = validator('form', async (value, c) => {
	const { book_id } = c.req.valid('param')
	if (!book_id) {
		throw new Error('Book ID not populated.')
	}

	const validated = {}

	const title = (value.title || '').trim()
	if (!title) {
		c.trouble.add('title', 'Title required')
	} else {
		const alreadyTaken = await books.find(c.client, { title })
		if (alreadyTaken && book_id !== alreadyTaken[0].book_id) {
			c.trouble.add('title', 'Title already in catalog.')
		} else {
			validated.title = title
		}
	}

	const author_id = (value.author_id || '').trim()
	if (!author_id) {
		c.trouble.add('author_id', 'No author indicated.')
	} else {
		const author = await authors.find(c.client, { author_id })
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

	const genreResults = await Promise.all(
		genreList.map((g) => genres.find(c.client, { genre_id: g }))
	)

	genreResults.forEach((r, idx) => {
		if (!r) {
			c.trouble.add('genre', `Invalid genre ID: ${genreList[idx]}`)
		}
	})

	// Attach parsed genre list
	validated.genreList = genreList

	return validated
})

export const bookController = {
	async index(c) {
		const result = await Promise.all([
			books.count(c.client),
			authors.count(c.client),
			genres.count(c.client),
			suggestions.find(c.client, 'cover_id', 'title', 'snippet', 'book_url'),
		])

		return c.render('catalog_active_home.hbs', {
			title: 'Archivia',
			book_count: result[0],
			author_count: result[1],
			genre_count: result[2],
			recent_books: result[3],
		})
	},

	book_list: [
		withPagination,
		async (c, next) => {
			const { page, limit } = c.req.valid('query')
			const search = c.req.query('q') || null

			if (search) {
				const matches = await trigramTitleQuery(c.client, search)

				return c.render('book_list.hbs', {
					books: matches,
					noResults: !Boolean(matches.length),
					total: matches.length,
					allResults: true,
					populate: { search: search },
				})
			}

			const [bookList, total] = await Promise.all([
				books.find(
					c.client,
					'book_url',
					'title',
					'snippet',
					'author_url',
					'full_name',
					{
						page,
						limit,
					}
				),

				justBooks.count(c.client),
			])

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

		const [resultBook, resultInstances, resultGenres] = await Promise.all([
			books.find(c.client, { book_id }),
			bookInstances.find(c.client, { book_id }),
			genresByBook.find(c.client, { book_id }),
		])

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

			const [[previous], genreList, authorList, genreChecks] =
				await Promise.all([
					books.find(c.client, { book_id }),
					genres.find(c.client),
					authors.find(c.client),
					genresByBook.find(c.client, { book_id }),
				])

			return c.render(`book_form.hbs`, {
				genres: genreList,
				authors: authorList,
				title: 'Edit Book',
				form_action: undefined,
				submit: 'Save Changes',
				populate: previous,
				genreChecks: genreChecks,
			})
		},
	],

	book_update_post: [
		bookIdValidator,
		bookFormValidator,
		async (c) => {
			const [genreLabels, authorLabels] = await Promise.all([
				genres.find(c.client),
				authors.find(c.client),
			])

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
						genres: genreLabels,
						authors: authorLabels,
						title: 'Edit Book',
						form_action: undefined,
						submit: 'Save Changes',
						populate: item,
						genreChecks: genreList.map((g) => ({ genre_id: parseInt(g) })),
					},
					400
				)
			}

			// Remove the old book_genres table entries
			await bookGenres.delete(c.client, { book_id })
			const [resultBook] = await justBooks.update(c.client, item, {
				book_id,
			})

			// Also need to repeatedly insert on genre/book junction table
			const bookID = resultBook.book_id
			for (const genreID of genreList) {
				try {
					await bookGenres.insert(c.client, {
						book_id,
						genre_id: genreID,
					})
				} catch (e) {
					log.err(e.message)
					throw e
				}
			}

			return c.redirect(resultBook.book_url)
		},
	],
}

/*
const TEMPbook_update_get = [
  bookIdValidator,
  async (req, res) => {
    if(req.trouble) {
        return res.redirect(`/catalog/books`)
    }

    const [[previous], genreList, authorList, genreChecks] = await Promise.all([
      books.find(req, { book_id: req.params.id }),
      genres.find(req),
      authors.find(req),
      genresByBook.find(req, { book_id: req.params.id }),
    ])

    res.render(`book_form.hbs`, {
      genres: genreList,
      authors: authorList,
      title: 'Edit Book',
      form_action: undefined,
      submit: 'Save Changes',
      populate: previous,
      genreChecks: genreChecks,
    })
  },
]
const TEMPbook_update_post = [
  bookIdValidator,
  ...bookValidators,
  onlySelfTitleCollision,
  async (req, res) => {
    const [genreLabels, authorLabels] = await Promise.all([
      genres.find(),
      authors.find(),
    ])

    const item = {
      title: req.body.title,
      isbn: req.body.isbn || null,
      author_id: req.body.author_id,
      summary: req.body.summary || null,
    }

    const trouble = validationResult(req)
    if (!trouble.isEmpty()) {
      if (trouble.array().find((e) => e.param === 'id')) {
        return res.redirect(`/catalog/book/update`)
      }

      return res.status(400).render(`book_form.hbs`, {
        trouble: trouble.array(),
        genres: genreLabels,
        authors: authorLabels,
        title: 'Edit Book',
        form_action: undefined,
        submit: 'Save Changes',
        populate: item,
        genreChecks: req.body.genreList?.map((g) => {
          return { genre_id: parseInt(g) }
        }),
      })
    }

    // Remove the old book_genres table entries
    await bookGenres.delete({ book_id: req.params.id })
    const [resultBook] = await justBooks.update(item, {
      book_id: req.params.id,
    })

    // Also need to repeatedly insert on genre/book junction table
    const bookID = resultBook.book_id
    for (const genreID of req.body.genreList) {
      try {
        await bookGenres.insert({
          book_id: bookID,
          genre_id: genreID,
        })
      } catch (e) {
        log.err(e.message)
        throw e
      }
    }

    res.redirect(resultBook.book_url)
  },
]
  */
