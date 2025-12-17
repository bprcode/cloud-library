import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
const { paginate } = require('./paginator.js')
const { genres, booksByGenre } = require('../database.js')

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
        booksByGenre.count(c.client, { genre_id })
    ])

    if ( !resultGenre )
        return c.render(`no_results.hbs`, {
            title: 'Genre not found.',
            text: ' '
        })

    const title = resultGenre[0].name

    return c.render(`genre_detail.hbs`, {
        title,
        genre_url: resultGenre[0].genre_url,
        result: resultBooks,
        genreCount
    })
}
}
