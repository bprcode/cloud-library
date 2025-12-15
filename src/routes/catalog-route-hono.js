const authorController = require('../controllers/author-control.js')
const bookinstanceController = require('../controllers/bookinstance-control.js')

import { validator } from 'hono/validator'
import { bookController } from '../controllers/hono-book-control'
import { genreController } from '../controllers/hono-genre-control'

import { Hono } from 'hono'
export const honoCatalogRouter = new Hono()

honoCatalogRouter
	.get('/', bookController.index)
	.get('/book/import', bookController.book_import_get)
	.get('/book/create', bookController.book_create_get)
	.post('/book/create', ...bookController.book_create_post)
	.get('/book/:id/delete', ...bookController.book_delete_get)
	.post('/book/:id/delete', ...bookController.book_delete_post)
	.get('/book/:id/update', ...bookController.book_update_get)
	.post('/book/:id/update', ...bookController.book_update_post)
	.get('/book/:id', bookController.book_detail)
	.get('/books', ...bookController.book_list)

	.get('/genre/json', genreController.genre_json_get)
