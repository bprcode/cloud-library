const bookController = require('../controllers/book-control.js')
const authorController = require('../controllers/author-control.js')
const genreController = require('../controllers/genre-control.js')
const bookinstanceController = require('../controllers/bookinstance-control.js')

import { validator } from 'hono/validator'
import { honoBookController } from '../controllers/hono-book-control'

import { Hono } from 'hono'
export const honoCatalogRouter = new Hono({ strict: false })

const pageValidator = (value, c) => {
	let page = Math.max(1, parseInt(value.page) || 1)
	let limit = Math.max(1, parseInt(value.limit) || 10)

	if (page === 13) {
		c.trouble.add('page', 'Unlucky page')
	}

	return { page, limit }
}

honoCatalogRouter
	.get('/books', async (c) => {
		return c.text('hi books')
	})
	.get('/foo', validator('query', pageValidator), (c) => {
		console.log(
			'troubles?',
			!c.trouble.isEmpty(),
			'which were?',
			c.trouble.array()
		)
		const { page, limit } = c.req.valid('query')

		return c.text(`Validated page ${page}, limit ${limit}`)
	})
	.get('/', honoBookController.index)
