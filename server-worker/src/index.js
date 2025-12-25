import { Hono } from 'hono/quick'
import { honoCatalogRouter } from './routes/hono-catalog-route.js'
import { honoResetRouter } from './routes/hono-reset-route.js'
import { HTTPException } from 'hono/http-exception'
import {
	injectRenderMethod,
	injectSqlQuerier,
	injectTroubleObject,
} from './middleware/hono-middleware.js'
require('@bprcode/handy')

const app = new Hono({ strict: false })

app
	.use(injectRenderMethod)
	.use(injectTroubleObject)
	.use(injectSqlQuerier)
	.get('/', (c) => c.redirect('/catalog'))
	.route('/catalog', honoCatalogRouter)
	.route('/reset', honoResetRouter)
	.get('/bookbot', (c) => c.text(c.env.BOOKBOT_URL))
	.get('/env', (c) => c.text(`Environment is: ${process.env.NODE_ENV}.`))
	.all('*', (c) =>
		c.render(
			'error.hbs',
			{
				title: 'Not Found',
				status_code: 404,
				error_message: 'File not found.',
			},
			404
		)
	)
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

// Initialize precompiled templating
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

	const [year, month, day] = date.split('-').map(Number)
	if (!year) {
		return ''
	}
	if (!month) {
		return String(year)
	}

	const formattedMonth = new Date(2000, month - 1, 1).toLocaleString('en-US', {
		month: 'short',
	})

	if (!day) {
		return `${formattedMonth} ${year}`
	}

	return `${formattedMonth} ${day}, ${year}`
})

Handlebars.registerHelper('pretty-date-old', (date) => {
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

export default app
