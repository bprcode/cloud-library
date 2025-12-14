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
			new Promise(ok => {
				log('sub-promise 0', yellow)
				setTimeout(() => {
					log('sub-promise 1', yellow)
					ok()
				}, 2000)
			}).then(() => log('after sub-promise', yellow))

			log('starting task', yellow)
			queueMicrotask(async () => {
				log('in microtask. Ending was: ', client._ending)
				
				await client.end().catch(err => log('1', pink)).then(() => log('2', yellow))
				log('after await')
			})
		} catch (e) {
			log('Error releasing client:', pink, e)
		}
	}

	new Promise(ok => {
				log('initial-promise 0', pink)
				setTimeout(() => {
					log('initial-promise 1', pink)
					ok()
				}, 2000)
			}).then(() => log('after initial-promise', pink))

	res.once('close', release)

	try {
		await client.connect()

		if(process.env.NODE_ENV !== 'production') {
				log('👉 client connected', yellow)
			}
		req.client = client
		next()
	} catch (e) {
		await release()
		next(e)
	}
}

module.exports = { perRequestClient }
