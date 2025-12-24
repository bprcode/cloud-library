import { Trouble } from '../validation/Trouble'
const { Client } = require('pg')

export let latestPath = 'no path yet'

export async function tracer(c, next) {
  latestPath = c.req.path.replace(/\d+/, ':id')
  await next()
}

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

// Instantiate a client for this specific request; release afterward.
// Clients are scoped to each request to match Cloudfront Workers lifecycles.
// Connections are pooled through Hyperdrive.
export async function injectQueryClientLifecycle(c, next) {
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
  }
