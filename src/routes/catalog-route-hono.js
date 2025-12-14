const bookController = require('../controllers/book-control.js')
const authorController = require('../controllers/author-control.js')
const genreController = require('../controllers/genre-control.js')
const bookinstanceController = require('../controllers/bookinstance-control.js')

import { honoBookController } from '../controllers/hono-book-control'

import { Hono } from 'hono'
export const honoCatalogRouter = new Hono({ strict: false })

honoCatalogRouter.get('/books', async (c) => {
	return c.text('hi books')
})
.get('/foo', c => c.text('foobar'))
.get('/', honoBookController.index)



function wrapExpressHandler(handler) {
  return async (c) => {
    let status = 200
    let headers = new Headers()
    let body

    const res = {
      status(code) {
        status = code
        return this
      },
      set(field, value) {
        headers.set(field, value)
        return this
      },
      json(data) {
        body = JSON.stringify(data)
        headers.set('Content-Type', 'application/json')
      },
      send(data) {
        body = data
      }
    }

    await handler(c.req, res)

    return new Response(body, { status, headers })
  }
}
