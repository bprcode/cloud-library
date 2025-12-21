import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
import { paginate } from './paginator'
const {
	genres,
	booksByGenre,
	bookGenres,
	justBooks,
} = require('../database.js')

const genreIdValidator = validator('param', async (value, c) => {
	const genre_id = value.id

	if (!genre_id) {
		throw new Error('Missing genre ID')
	}

	const result = await genres.find(c.client, { genre_id })

	if (result?.length) {
		return {
			genre_id,
			genre: result[0],
		}
	}

	c.trouble.add('id', 'No genre matched ID.')
	return { genre_id }
})

const genreBodyValidator = async (value, c) => {
	const validated = {}
	const genre_id = c.req.valid('param')?.genre_id ?? '-1'

	if (typeof value.name !== 'string' || value.name.length < 1) {
		c.trouble.add('name', 'Name required')
	} else {
		validated.name = value.name.trim()
	}

	const collisions = await genres.find(c.client, { name: value.name })

	if (
		collisions &&
		collisions.find((c) => String(c.genre_id) !== String(genre_id))
	) {
		c.trouble.add('name', 'Genre name already in use.')
		validated.nameCollision = value.name
	}

	return validated
}

const genreFormValidator = validator('form', genreBodyValidator)
const genreJsonValidator = validator('json', genreBodyValidator)

export const genreController = {
	async genre_json_get(c) {
		const result = await genres.find(c.client)
		return c.json(result || [])
	},

	genre_list: [
		withPagination,
		async (c) => {
			const { page, limit } = c.req.valid('query')

			const [genreList, total] = await Promise.all([
				genres.find(c.client, {
					page,
					limit,
				}),

				genres.count(c.client),
			])

			const position = paginate(page, limit, total)

			return c.render(`genre_list.hbs`, {
				genres: genreList,
				noResults: !genreList,
				...position,
			})
		},
	],

	async genre_detail(c) {
		const genre_id = c.req.param('id')

		const [resultGenre, resultBooks, genreCount] = await Promise.all([
			genres.find(c.client, { genre_id }),
			booksByGenre.find(c.client, { genre_id }),
			booksByGenre.count(c.client, { genre_id }),
		])

		if (!resultGenre)
			return c.render(`no_results.hbs`, {
				title: 'Genre not found.',
				text: ' ',
			})

		const title = resultGenre[0].name

		return c.render(`genre_detail.hbs`, {
			title,
			genre_url: resultGenre[0].genre_url,
			result: resultBooks,
			genreCount,
		})
	},

	genre_update_get: [
		genreIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/genre/update`)
			}

			const { genre } = c.req.valid('param')

			// Render populated update form
			return c.render(`genre_form.hbs`, {
				title: 'Edit Genre',
				form_action: undefined, // post to current URL
				populate: genre,
				submit: 'Save Changes',
			})
		},
	],

	genre_update_post: [
		genreIdValidator,
		genreFormValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				// Redirect invalid ID update requests
				if (c.trouble.array().find((e) => e.param === 'id')) {
					return c.redirect(`/catalog/genre/update`)
				}

				// Re-render the form for invalid submitted data
				return c.render(
					`genre_form.hbs`,
					{
						trouble: c.trouble.array(),
						title: 'Edit Genre',
						form_action: undefined,
						submit: 'Save Changes',
						populate: { name: c.req.valid('form').nameCollision },
					},
					400
				)
			}

			const { genre_id } = c.req.valid('param')
			const { name } = c.req.valid('form')

			const result = await genres.update(c.client, { name }, { genre_id })

			return c.redirect(result[0].genre_url)
		},
	],

	async genre_create_get(c) {
		return c.render(`genre_form.hbs`, {
			title: 'Add Genre',
			form_action: '/catalog/genre/create',
			submit: 'Create',
		})
	},

	genre_create_post: [
		genreFormValidator,
		async (c) => {
			const { name, nameCollision } = c.req.valid('form')
			if (!c.trouble.isEmpty()) {
				return c.render(
					`genre_form.hbs`,
					{
						trouble: c.trouble.array(),
						title: 'Add Genre',
						form_action: '/catalog/genre/create',
						submit: 'Create',
						populate: { name: nameCollision },
					},
					400
				)
			}
			try {
				const result = await genres.insert(c.client, { name })
				return c.redirect(result[0].genre_url)
			} catch (e) {
				log.err(e.message)
				throw e
			}
		},
	],

	genre_delete_get: [
		genreIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/genre/delete`)
			}

			const { genre } = c.req.valid('param')
			return c.render(`genre_delete.hbs`, { genre })
		},
	],
	genre_delete_post: [
		genreIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/genre/delete`)
			}

			const { genre_id } = c.req.valid('param')

			await genres.delete(c.client, { genre_id })
			return c.redirect(`/catalog/genres`)
		},
	],

	genre_json_post: [
		genreJsonValidator,
		async (c) => {
			const { name } = c.req.valid('json')

			if (!c.trouble.isEmpty()) {
				return c.json({ trouble: c.trouble.array() }, { status: 409 })
			}
			try {
				const result = await genres.insert(c.client, { name })
				return await c.json(result[0], { status: 201 })
			} catch (e) {
				log.err(e.message)
				throw e
			}
		},
	],

	associate_json_post: [
		validator('json', async (value, c) => {
			const validated = {}
			const { genre_id, book_id } = value

			if (await genres.find(c.client, { genre_id })) {
				validated.genre_id = genre_id
			} else {
				c.trouble.add('genre_id', 'Invalid genre ID.')
			}

			if (await justBooks.find(c.client, { book_id })) {
				validated.book_id = book_id
			} else {
				c.trouble.add('book_id', 'Invalid book ID.')
			}

			return validated
		}),
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.json({ trouble: c.trouble.array() }, { status: 400 })
			}

			try {
				const { book_id, genre_id } = c.req.valid('json')

				const result = await bookGenres.insert(c.client, {
					book_id,
					genre_id,
				})
				if (result) {
					return c.json(result[0], { status: 201 })
				}
			} catch (e) {
				log.err(e.message)
				throw e
			}
		},
	],
}
