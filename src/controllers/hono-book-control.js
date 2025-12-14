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
const { noteTrouble } = require('../validation.js')

export const honoBookController = {
	async index(c) {
		const result = await Promise.all([
			books.count(c.req),
			authors.count(c.req),
			genres.count(c.req),
			suggestions.find(c.req, 'cover_id', 'title', 'snippet', 'book_url'),
		])

		return c.render('catalog_active_home.hbs', {
			title: 'Archivia',
			book_count: result[0],
			author_count: result[1],
			genre_count: result[2],
			recent_books: result[3],
		})
	},
}
