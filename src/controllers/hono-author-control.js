import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
import { paginate } from './paginator'

const {
	authors,
	books,
	snipTimes,
	trigramAuthorQuery,
} = require('../database.js')

const authorIdValidator = validator('param', async (value, c) => {
	const author_id = value.id

	if (!author_id) {
		throw new Error('Missing author ID')
	}

	const found = await snipTimes(authors.find(c.client, { author_id }))
	const author = found ? found[0] : null

	if (author) {
		return {
			author_id,
			author,
		}
	}

	c.trouble.add('id', 'No book matched ID.')
	return { author_id }
})

async function authorBodyValidation(value, c) {
	const trim = (v) => (typeof v === 'string' ? v.trim() : v)
	const validated = {}

	const first_name = trim(value.first_name)
	const last_name = trim(value.last_name) || null
	const author_id = c.req.valid('param')?.author_id ?? '-1'

	if (first_name) {
		const search = { first_name, last_name }
		const result = await authors.find(c.client, search)

		if (
			result &&
			result.length &&
			String(result[0].author_id) !== String(author_id)
		) {
			c.trouble.add(
				'first_name',
				`Name already in use: #${result[0].author_id}`
			)
		}
	}

	// first_name (required)
	if (!first_name || first_name.length < 1) {
		c.trouble.add('first_name', 'First name required')
	} else {
		validated.first_name = first_name
	}

	// last_name (optional)
	if (value.last_name) {
		validated.last_name = trim(value.last_name)
	}

	// dob / dod (optional, fallback to year)
	if (value.dob) validated.dob = trim(value.dob)
	if (value.dod) validated.dod = trim(value.dod)

	// bio (optional)
	if (value.bio) validated.bio = trim(value.bio)

	// yob / yod (optional, numeric)
	if (value.yob) {
		const yob = trim(value.yob)
		if (!/^\d+$/.test(yob)) {
			c.trouble.add('yob', 'Year of birth must be numeric.')
		} else {
			validated.yob = yob
			if (!validated.dob) validated.dob = yob
		}
	}

	if (value.yod) {
		const yod = trim(value.yod)
		if (!/^\d+$/.test(yod)) {
			c.trouble.add('yod', 'Year of death must be numeric.')
		} else {
			validated.yod = yod
			if (!validated.dod) validated.dod = yod
		}
	}

	return validated
}

const authorFormValidator = validator('form', authorBodyValidation)
const authorJsonValidator = validator('json', authorBodyValidation)

export const authorController = {
	author_list: [
		withPagination,
		async (c) => {
			const { page, limit } = c.req.valid('query')
			const search = c.req.query('q') || null

			if (search) {
				const matches = await trigramAuthorQuery(c.client, search)

				return c.render('author_list.hbs', {
					authors: matches,
					noResults: !Boolean(matches.length),
					total: matches.length,
					allResults: true,
					populate: { search },
				})
			}

			const [authorList, total] = await Promise.all([
				snipTimes(
					authors.find(
						c.client,
						'full_name',
						'dob',
						'dod',
						'author_url',
						'blurb',
						{
							page,
							limit,
						}
					)
				),

				authors.count(c.client),
			])

			const position = paginate(page, limit, total)

			return c.render(`author_list.hbs`, {
				authors: authorList,
				noResults: !authorList,
				...position,
			})
		},
	],

	author_detail: [
		authorIdValidator,
		async (c) => {
			const { author, author_id } = c.req.valid('param')

			if (!author) {
				return c.render(`no_results.hbs`)
			}

			const bookList = await books.find(c.client, { author_id })

			// Split text for paragraph tags:
			if (author.bio) {
				author.bio = author.bio.split(/\n+/)
			}

			return c.render(`author_detail.hbs`, {
				author,
				books: bookList,
				title: author.full_name,
			})
		},
	],

	author_update_get: [
		authorIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/author/update`)
			}

			const { author } = c.req.valid('param')

			return c.render(`author_form.hbs`, {
				author,
				title: 'Edit Author',
				form_action: undefined,
				submit: 'Save Changes',
			})
		},
	],

	author_update_post: [
		authorIdValidator,
		authorFormValidator,
		async (c) => {
			const { author_id } = c.req.valid('param')
			const validated = c.req.valid('form')
			const author = {
				first_name: validated.first_name,
				last_name: validated.last_name || null,
				dob: validated.dob || null,
				dod: validated.dod || null,
				bio: validated.bio || null,
			}

			if (!c.trouble.isEmpty()) {
				if (c.trouble.array().find((e) => e.param === 'id')) {
					return c.redirect(`/catalog/author/update`)
				}

				return c.render(`author_form.hbs`, {
					author,
					trouble: c.trouble.array(),
					title: 'Edit Author',
					form_action: undefined,
					submit: 'Save Changes',
				})
			}

			const [result] = await authors.update(c.client, author, { author_id })

			return c.redirect(result.author_url)
		},
	],

	author_json_post: [
		authorJsonValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.json({ trouble: c.trouble.array() }, { status: 400 })
			}

			try {
				const validated = c.req.valid('json')
				const result = await authors.insert(c.client, {
					first_name: validated.first_name,
					last_name: validated.last_name || null,
					dob: validated.dob || null,
					dod: validated.dod || null,
					bio: validated.bio || null,
				})

				return c.json(result[0], { status: 201 })
			} catch (e) {
				log.err(e.message)
				throw e
			}
		},
	],

	author_delete_get: [
		authorIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/author/delete`)
			}

			const { author, author_id } = c.req.valid('param')
			const bookList = await books.find(c.client, { author_id })

			return c.render(`author_delete.hbs`, {
				author,
				books: bookList,
			})
		},
	],

	author_delete_post: [
		authorIdValidator,
		async (c) => {
			const { author_id } = c.req.valid('param')
			await authors.delete(c.client, { author_id })
			return c.redirect(`/catalog/authors`)
		},
	],

	author_create_post: [
		authorFormValidator,
		async (c) => {
			const validated = c.req.valid('form')
			const item = {
				first_name: validated.first_name,
				last_name: validated.last_name || null,
				dob: validated.dob || null,
				dod: validated.dod || null,
				bio: validated.bio || null,
			}

			if (!c.trouble.isEmpty()) {
				return c.render(
					`author_form.hbs`,
					{
						author: item,
						trouble: c.trouble.array(),
						title: 'Add Author',
						form_action: '/catalog/author/create',
						submit: 'Create',
					},
					400
				)
			}

			try {
				const [result] = await authors.insert(c.client, item)
				return c.redirect(result.author_url)
			} catch (e) {
				log.err(e.message)
				throw e
			}
		},
	],

	async author_create_get(c) {
		return c.render(`author_form.hbs`, {
			title: 'Add Author',
			form_action: '/catalog/author/create',
			submit: 'Create',
		})
	},

	async author_import_get(c) {
		return c.render(`import_author.hbs`, { title: 'Import author' })
	},
}
