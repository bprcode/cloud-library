const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book-control.js')
const authorController = require('../controllers/author-control.js')
const genreController = require('../controllers/genre-control.js')
const bookinstanceController = require('../controllers/bookinstance-control.js')

router
	.get('/', bookController.index)
	.get('/book/import', bookController.book_import_get)
	.post('/book/json', bookController.book_json_post) // AUDIT
	.get('/book/create', bookController.book_create_get)
	.post('/book/create', bookController.book_create_post)
	.get('/book/:id/delete', bookController.book_delete_get)
	.post('/book/:id/delete', bookController.book_delete_post)
	.get('/book/:id/update', bookController.book_update_get)
	.post('/book/:id/update', bookController.book_update_post)
	.get('/book/:id', bookController.book_detail)
	.get('/books', bookController.book_list)

	.get('/author/import', authorController.author_import_get)
	.post('/author/json', authorController.author_json_post) // AUDIT?
	.get('/author/create', authorController.author_create_get)
	.post('/author/create', authorController.author_create_post)
	.get('/author/:id/delete', authorController.author_delete_get)
	.post('/author/:id/delete', authorController.author_delete_post)
	.get('/author/:id/update', authorController.author_update_get)
	.post('/author/:id/update', authorController.author_update_post)
	.get('/author/:id', authorController.author_detail)
	.get('/authors', authorController.author_list)

	.post('/genre/associate/json', genreController.associate_json_post) // AUDIT
	.get('/genre/json', genreController.genre_json_get)
	.post('/genre/json', genreController.genre_json_post)
	.get('/genre/create', genreController.genre_create_get)
	.post('/genre/create', genreController.genre_create_post)
	.get('/genre/:id/delete', genreController.genre_delete_get)
	.post('/genre/:id/delete', genreController.genre_delete_post)
	.get('/genre/:id/update', genreController.genre_update_get)
	.post('/genre/:id/update', genreController.genre_update_post)
	.get('/genre/:id', genreController.genre_detail)
	.get('/genres', genreController.genre_list)

	.get(
		['/bookinstance/create/:id', '/inventory/create/:id'],
		bookinstanceController.bookinstance_create_get
	) // AUDIT
	.get(
		['/bookinstance/create', '/inventory/create'],
		bookinstanceController.bookinstance_create_get
	) // AUDIT
	.post(
		['/bookinstance/create', '/inventory/create'],
		bookinstanceController.bookinstance_create_post
	) // AUDIT
	.get(
		['/bookinstance/delete', '/inventory/delete'],
		bookinstanceController.bookinstance_delete_choose
	) // AUDIT
	.get(
		['/bookinstance/:id/delete', '/inventory/:id/delete'],
		bookinstanceController.bookinstance_delete_get
	) // AUDIT
	.post(
		['/bookinstance/:id/delete', '/inventory/:id/delete'],
		bookinstanceController.bookinstance_delete_post
	) // AUDIT
	.get(
		['/bookinstance/update', '/inventory/update'],
		bookinstanceController.bookinstance_update_choose
	) // AUDIT
	.get(
		['/bookinstance/:id/update', '/inventory/:id/update'],
		bookinstanceController.bookinstance_update_get
	) // AUDIT
	.post(
		['/bookinstance/:id/update', '/inventory/:id/update'],
		bookinstanceController.bookinstance_update_post
	) // AUDIT
	.get(
		['/bookinstance/:id', '/inventory/:id'],
		bookinstanceController.bookinstance_detail
	) // AUDIT
	.get(
		['/bookinstances', '/inventory'],
		bookinstanceController.bookinstance_list
	) // AUDIT

module.exports = router
