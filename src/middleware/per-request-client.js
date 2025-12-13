const { Client } = require('pg')
const clientArgs = {
	ssl:
		process.env.NODE_ENV === 'production'
			? {
					rejectUnauthorized: false,
			  }
			: undefined,
}

async function perRequestClient(req, res, next) {
	const client = new Client(clientArgs)

	const release = async () => {
		try {
			await client.end()
		} catch (e) {
			log('Error releasing client:', pink, e)
		}
	}

	res.once('close', release)

	try {
		await client.connect()
		req.client = client
		next()
	} catch (e) {
		await release()
		next(e)
	}
}

module.exports = { perRequestClient }
