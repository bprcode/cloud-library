// const bookController = require('../controllers/book-control.js')
const authorController = require('../controllers/author-control.js')
const genreController = require('../controllers/genre-control.js')
const bookinstanceController = require('../controllers/bookinstance-control.js')

import { validator } from 'hono/validator'
import { bookController } from '../controllers/hono-book-control'

import { Hono } from 'hono'
export const honoCatalogRouter = new Hono()

honoCatalogRouter
	.get('/', bookController.index)
  .get('/book/:id/update', ...bookController.book_update_get)
	.get('/book/:id', bookController.book_detail)
	.get('/books', ...bookController.book_list)
