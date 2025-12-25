import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
import { paginate } from './paginator'
import { queries } from '../queries'

const genreIdValidator = validator('param', async (value, c) => {
	const genre_id = value.id

	if (!genre_id) {
		throw new Error('Missing genre ID')
	}

	const result = await queries.genre_by_id(c.sql, genre_id)

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

	const collisions = await queries.genre_by_name(c.sql, value.name)

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
		const result = await queries.all_genres(c.sql)
		return c.json(result || [])
	},

	genre_list: [
		withPagination,
		async (c) => {
			const { page, limit } = c.req.valid('query')

			const [genreList, total] = await queries.genre_list(c.sql, limit, page)

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

		const [resultGenre, resultBooks] = await queries.genre_detail(
			c.sql,
			genre_id
		)

		const genreCount = String(resultBooks?.length || 0)

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

			const result = await queries.update_genre(c.sql, genre_id, name)

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

			const result = await queries.create_genre(c.sql, name)
			return c.redirect(result[0].genre_url)
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

			await queries.delete_genre(c.sql, genre_id)
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

			const result = await queries.create_genre(c.sql, name)
			return await c.json(result[0], { status: 201 })
		},
	],

	associate_json_post: [
		validator('json', async (value, c) => {
			const validated = {}
			const { genre_id, book_id } = value

			const foundGenre = await queries.genre_by_id(c.sql, genre_id)
			const foundBook = await queries.just_book_by_id(c.sql, book_id)

			if (foundGenre) {
				validated.genre_id = genre_id
			} else {
				c.trouble.add('genre_id', 'Invalid genre ID.')
			}

			if (foundBook) {
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

			const { book_id, genre_id } = c.req.valid('json')

			try {
				const result = await queries.create_book_genre_association(
					c.sql,
					book_id,
					genre_id
				)

				if (result) {
					return c.json(result[0], { status: 201 })
				}
			} catch (e) {
				return c.text('Conflict in existing associations.', { status: 409 })
			}
			return c.text('Unable to make association.', { status: 400 })
		},
	],

	async genres_with_ids(c) {
		const result = await queries.genres_with_ids(c.sql)
		return c.json(result)
	},
}
