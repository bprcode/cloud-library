import { Hono } from 'hono'
import { honoCatalogRouter } from './routes/catalog-route-hono.js'
import {honoResetRouter} from './routes/hono-reset-route.js'
const { Client } = require('pg')
require('@bprcode/handy')
import express from 'express'
import { HTTPException } from 'hono/http-exception'
import { Trouble } from './validation/Trouble.js'
const oldApp = express()

const app = new Hono({ strict: false })

app
	// Add a render method
	.use((c, next) => {
		c.render = (template, options, status = 200) => {
			const templateName = template.split('.')[0]

			if (!Handlebars) {
				throw new Error('Handlebars not defined.')
			}
			if (!Handlebars.templates) {
				throw new Error('Handlebars.templates not defined.')
			}

			if (!(templateName in Handlebars.templates)) {
				throw new Error(`${template} not found in templates`)
			}

			const html = Handlebars.templates[templateName](options)

			return c.html(html, status)
		}

		return next()
	})
	// Add an error-tracking object (mimic express-validator's interface.)
	.use((c, next) => {
		c.trouble = new Trouble()

		return next()
	})
	// Add a complete per-response query client lifecycle.
	.use(async (c, next) => {
		c.connectionString =
			process.env.NODE_ENV !== 'production'
				? process.env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_HYPERDRIVE
				: c.env.HYPERDRIVE?.connectionString

		const client = new Client({ connectionString: c.connectionString })
		await client.connect()
		c.client = client

		try {
			await next()
		} finally {
			c.executionCtx.waitUntil(
				(async () => {
					await client.end()
				})()
			)
		}
	})
	.get('/', (c) => {
		return c.redirect('/catalog')
	})
	.route('/catalog', honoCatalogRouter)
	.route('/reset', honoResetRouter)
	.get('/env', (c) => {
		return c.text(`Environment is: ${process.env.NODE_ENV}`)
	})
	.all('*', (c) => {
		return c.render(
			'error.hbs',
			{
				title: 'Not Found',
				status_code: 404,
				error_message: 'File not found.',
			},
			404
		)
	})
	.onError((err, c) => {
		c.status(err instanceof HTTPException ? err.status : 500)

		return c.render('error.hbs', {
			title: 'Error Encountered',
			status_code: c.res.status,
			error_message: err.message,
			error_stack:
				process.env.NODE_ENV !== 'production' ? err.stack : undefined,
		})
	})

//
const helmet = require('helmet')

// Initialize templating
const { DateTime } = require('luxon')

// Precompilation templating
const Handlebars = require('handlebars/runtime')
global.Handlebars = Handlebars

require('../built/partials')
require('../built/shared-partials')
require('../built/backend-templates')

Handlebars.registerHelper('match', (a, b) => a === b)
Handlebars.registerHelper('match-string', (a, b) => String(a) === String(b))
Handlebars.registerHelper('find-in', (arr, key, value) => {
	return arr?.find((e) => e[key] === value)
})
Handlebars.registerHelper('extract-year', (dateString) => {
	return dateString?.match(/\d*/)[0]
})

Handlebars.registerHelper('pretty-date', (date) => {
	if (!date) {
		return ''
	}
	if (date.match?.(/^\d*$/)) {
		return date
	}
	if (date instanceof Date) {
		return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
	}
	return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)
})
Handlebars.registerHelper('plural-s', (count) => (count > 1 ? 's' : ''))

// Helper to use position in iterable to insert a comma, or not:
Handlebars.registerHelper('comma-list', (...stuff) => {
	if (!stuff[stuff.length - 1].data.last) return `, `
	else return ``
})

// Obtain an error status message, or undefined if not set:
Handlebars.registerHelper('error-check', (trouble, name) => {
	if (trouble) return trouble.find((t) => t.param === name)?.msg
	return undefined
})

// Load routers
const catalogRouter = require('./routes/catalog-route.js')

oldApp
	.use(helmet({ contentSecurityPolicy: false }))
	.disable('x-powered-by')

	.use(express.urlencoded({ extended: true }))
	.use(express.json())

	.use((req, res, next) => {
		if (process.env.NODE_ENV !== 'production') {
			log(req.method + '> ' + req.originalUrl, dim)
		}
		next()
	})

	// Patch render method to directly reference compiled template bundle:
	.use((req, res, next) => {
		res.render = (template, options) => {
			const templateName = template.split('.')[0]

			if (!Handlebars) {
				throw new Error('Handlebars not defined.')
			}
			if (!Handlebars.templates) {
				throw new Error('Handlebars.templates not defined.')
			}

			if (!(templateName in Handlebars.templates)) {
				throw new Error(`${template} not found in templates`)
			}

			res.send(Handlebars.templates[templateName](options))
		}

		next()
	})

	.use('/health', (req, res) => {
		res.status(200).send()
	})
	.get('/', (req, res) => {
		res.redirect('/catalog')
	})
	.use('/catalog', catalogRouter)

	.use((req, res, next) => {
		res.status(404)
		throw new Error('File not found.')
	})

	.use((err, req, res, next) => {
		res.render('error.hbs', {
			title: 'Error Encountered',
			status_code: res.statusCode,
			error_message: err.message,
			error_stack:
				process.env.NODE_ENV !== 'production' ? err.stack : undefined,
		})
	})

export default app
