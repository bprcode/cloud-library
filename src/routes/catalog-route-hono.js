import { bookController } from '../controllers/hono-book-control'
import { genreController } from '../controllers/hono-genre-control'
import { authorController } from '../controllers/hono-author-control'
import { bookinstanceController } from '../controllers/hono-bookinstance-control'
import { Hono } from 'hono'

export const honoCatalogRouter = new Hono()

honoCatalogRouter
	.get('/', bookController.index)
	.get('/book/import', bookController.book_import_get)
	.post('/book/json', ...bookController.book_json_post)
	.get('/book/create', bookController.book_create_get)
	.post('/book/create', ...bookController.book_create_post)
	.get('/book/:id/delete', ...bookController.book_delete_get)
	.post('/book/:id/delete', ...bookController.book_delete_post)
	.get('/book/:id/update', ...bookController.book_update_get)
	.post('/book/:id/update', ...bookController.book_update_post)
	.get('/book/:id', bookController.book_detail)
	.get('/books', ...bookController.book_list)

	.get('/author/import', authorController.author_import_get)
	.post('/author/json', ...authorController.author_json_post)
	.get('/author/create', authorController.author_create_get)
	.post('/author/create', ...authorController.author_create_post)
	.get('/author/:id/delete', ...authorController.author_delete_get)
	.post('/author/:id/delete', ...authorController.author_delete_post)
	.get('/author/:id/update', ...authorController.author_update_get)
	.post('/author/:id/update', ...authorController.author_update_post)
	.get('/author/:id', ...authorController.author_detail)
	.get('/authors', ...authorController.author_list)

	.get('/genre/json', genreController.genre_json_get)
	.post('/genre/json', ...genreController.genre_json_post)
	.get('/genre/create', genreController.genre_create_get)
	.post('/genre/create', ...genreController.genre_create_post)
	.get('/genre/:id/delete', ...genreController.genre_delete_get)
	.post('/genre/:id/delete', ...genreController.genre_delete_post)
	.get('/genre/:id/update', ...genreController.genre_update_get)
	.post('/genre/:id/update', ...genreController.genre_update_post)
	.get('/genre/:id', genreController.genre_detail)
	.get('/genres', ...genreController.genre_list)

	// Duplicate registrations for route aliases
	// Create by id:
	.get(
		'/bookinstance/create/:id',
		...bookinstanceController.bookinstance_create_get
	)
	.get('/inventory/create/:id', ...bookinstanceController.bookinstance_create_get)
	// Create (without id):
	.get('/bookinstance/create', ...bookinstanceController.bookinstance_create_get)
	.get('/inventory/create', ...bookinstanceController.bookinstance_create_get)

	.post('/bookinstance/create', ...bookinstanceController.bookinstance_create_post)
	.post('/inventory/create', ...bookinstanceController.bookinstance_create_post)
	.get(
		'/bookinstance/:id/delete',
		...bookinstanceController.bookinstance_delete_get
	)
	.get('/inventory/:id/delete', ...bookinstanceController.bookinstance_delete_get)
	.post(
		'/bookinstance/:id/delete',
		...bookinstanceController.bookinstance_delete_post
	)
	.post(
		'/inventory/:id/delete',
		...bookinstanceController.bookinstance_delete_post
	)
	.get(
		'/bookinstance/:id/update',
		...bookinstanceController.bookinstance_update_get
	)
	.get('/inventory/:id/update', ...bookinstanceController.bookinstance_update_get)
	.post(
		'/bookinstance/:id/update',
		...bookinstanceController.bookinstance_update_post
	)
	.post(
		'/inventory/:id/update',
		...bookinstanceController.bookinstance_update_post
	)
	.get('/bookinstance/:id', ...bookinstanceController.bookinstance_detail)
	.get('/inventory/:id', ...bookinstanceController.bookinstance_detail)
	.get('/bookinstances', ...bookinstanceController.bookinstance_list)
	.get('/inventory', ...bookinstanceController.bookinstance_list)
