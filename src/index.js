// require('@bprcode/handy')
import { httpServerHandler } from 'cloudflare:node'
import express from 'express'
const app = express()

const helmet = require('helmet')
const compression = require('compression')

// Initialize templating
const { DateTime } = require('luxon')
const hbs = require('hbs')

// Precompilation templating
const Handlebars = require('handlebars')
const sampleTemplate = require('../built/views/partials/lean_layout')


// TODO
// hbs.registerPartials(path.join(__dirname, '/views/partials'))
// hbs.registerPartials(path.join(__dirname, '/public/templates'))

// hbs.registerHelper('match', (a, b) => a === b)
// hbs.registerHelper('match-string', (a, b) => String(a) === String(b))
// hbs.registerHelper('find-in', (arr, key, value) => {
// 	return arr?.find((e) => e[key] === value)
// })
// hbs.registerHelper('extract-year', (dateString) => {
// 	return dateString?.match(/\d*/)[0]
// })

hbs.registerHelper('pretty-date', (date) => {
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
hbs.registerHelper('plural-s', (count) => (count > 1 ? 's' : ''))

// Helper to use position in iterable to insert a comma, or not:
hbs.registerHelper('comma-list', (...stuff) => {
	if (!stuff[stuff.length - 1].data.last) return `, `
	else return ``
})

// Obtain an error status message, or undefined if not set:
hbs.registerHelper('error-check', (trouble, name) => {
	if (trouble) return trouble.find((t) => t.param === name)?.msg
	return undefined
})

// Load routers
const catalogRouter = require('./routes/catalog-route.js')
const resetRouter = require('./routes/reset-route.js')

app
	.use(compression())
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

	.use('/health', (req, res) => {
		res.status(200).send()
	})
	.get('/', (req, res) => {
		res.redirect('/catalog')
	})
	.use('/catalog', catalogRouter)
	.use('/reset', resetRouter)

    // TODO
	// .use(express.static(path.join(__dirname, 'public')))
	.get('/hb', (req, res) => {
		// const html = Handlebars.templates['lean_layout.hbs']()

		// const justPart = html.substring(0,1023)

		// const test = `${justPart}`
		// console.log(test)
		// res.send(test)
		res.send('x'.repeat(1024))

		// res.send(html)


		// console.log(html)
		// res.setHeader('Content-Type', 'text/html; charset=utf-8');
		// res.end(Buffer.from(html, 'utf8'))
		// res.send(`<html style="color:blue">some test string
		// 	even with newlines and such</html>`)
	})

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

const server = app.listen(3000, () => {
	if (process.env.NODE_ENV === 'production')
		log('App running in production mode.', blue)
	else log('App running in development mode.', yellow)

	log(moo() + ' Server active on: ', green, server.address())
})

export default httpServerHandler({ port: 3000 })
