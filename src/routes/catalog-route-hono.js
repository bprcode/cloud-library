const bookController = require('../controllers/book-control.js')
const authorController = require('../controllers/author-control.js')
const genreController = require('../controllers/genre-control.js')
const bookinstanceController = require('../controllers/bookinstance-control.js')

import { Hono } from 'hono'
export const honoCatalogRouter = new Hono()

honoCatalogRouter.get('/books', async (c) => {
	return c.text('hi books')
})
