import postgres from 'postgres'
import { Trouble } from '../validation/Trouble'

// Add a c.render() method for rendering Handlebars templates:
export async function injectRenderMethod(c, next) {
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
}

// Add an error-tracking object (mimic express-validator's interface):
export async function injectTroubleObject(c, next) {
	c.trouble = new Trouble()

	return next()
}

export async function injectSqlQuerier(c, next) {
	const connectionString =
		process.env.NODE_ENV === 'production'
			? c.env.HYPERDRIVE?.connectionString
			: process.env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_HYPERDRIVE
	c.connectionString = connectionString

	c.sql = postgres(connectionString, {
		max: 5,
		fetch_types: false,
		prepare: true,
		// Return sql DATEs as strings, not semantically-incorrect js Dates:
		types: {
			date: {
				from: 1082,
				parse: value => value
			}
		}
	})

	await next()
}
