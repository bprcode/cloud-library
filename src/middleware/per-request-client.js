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
			log('👋 Request done, releasing client')
			await client.end()
		} catch (e) {
			log('Error releasing client:', pink, e)
		}
	}

	res.once('close', release)

	try {
		log('🫳 request received, starting client')
		await client.connect()
		req.client = client
		return next()
	} catch (e) {
		await release()
		return next(e)
	}
}

module.exports = { perRequestClient }
