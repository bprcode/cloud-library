import { bookController } from '../controllers/hono-book-control'
import { genreController } from '../controllers/hono-genre-control'
import { authorController} from '../controllers/hono-author-control'
import { bookinstanceController} from '../controllers/hono-bookinstance-control'
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
