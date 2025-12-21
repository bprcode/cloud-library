const { Client } = require('pg')
require('@bprcode/handy')

let dbLog = (...args) => {
	if (args.length > 1) {
		log(...args)
		return
	}
	if (typeof args[0] !== 'string') {
		log(...args)
		return
	}

	const words = args[0].split(' ')
	const segments = []

	for (const w of words) {
		if (w === w.toLocaleUpperCase()) {
			segments.push(w)
			segments.push(blue)
		} else {
			segments.push(w)
			segments.push(dim)
		}
		segments.push(' ')
	}

	log(...segments)
}

// Silence database logs in production:
if (process.env.NODE_ENV === 'production') {
	dbLog = (_) => {}
}
const http = require('http')

// Override the node-postgres conversion of SQL DATEs to JavaScript Dates.
// For this application, a "due date" is assumed to be in the time zone of
// the catalog maintainer; we do not want local conversion.
require('pg').types.setTypeParser(1082, (v) => v)

async function trigramAuthorQuery(client, fuzzy) {
	await client.query('BEGIN')
	await client.query(`SET LOCAL pg_trgm.similarity_threshold = 0.05`)
	const results = await client.query(
		`
			SELECT full_name, dob, dod, author_url, blurb,
				(CASE
					WHEN full_name ~* ('\\m' || $1 ) THEN 10
					WHEN full_name ILIKE '%' || $1 || '%' THEN 5
					ELSE 0
				END)
					+ word_similarity(full_name, $1) 
					AS score
					FROM lib.authors
					WHERE full_name % $1
					ORDER BY score DESC
					LIMIT 20
		`,
		[fuzzy]
	)
	await client.query('COMMIT')

	return results.rows
}
async function trigramTitleQuery(client, fuzzy) {
	await client.query('BEGIN')
	await client.query(`SET LOCAL pg_trgm.similarity_threshold = 0.05`)
	const results = await client.query(
		`
			SELECT 
				book_url,
				title,
				snippet,
				author_url,
				full_name,
			(CASE
				WHEN title ~* ('\\m' || $1 ) THEN 10
				WHEN title ILIKE '%' || $1 || '%' THEN 5
				ELSE 0
			END)
				+ word_similarity(title, $1)
				AS score
				FROM lib.books JOIN lib.authors USING(author_id)
				WHERE title % $1
				ORDER BY score DESC
				LIMIT 100
		`,
		[fuzzy]
	)
	await client.query('COMMIT')

	return results.rows
}

async function clientQuery(client, ...etc) {
	try {
		const rows = (await client.query(...etc)).rows
		if (rows.length === 0) {
			return null
		}

		return rows
	} catch (e) {
		dbLog('Database client error:', pink, e)
	}
}

function paginationOffset(page, limit) {
	return (page - 1) * limit || 0
}

// A class which parses an object into a SQL WHERE statement,
// accounting for nulls (IS NULL) and treating other properties as
// case-insensitive ILIKE comparisons.
class WhereClause {
	clause = ''
	_values = []
	offset = 0
	limit = undefined

	constructor(conditions) {
		if (!conditions) {
			return
		}

		let index = 1

		this.offset = (conditions.page - 1) * (conditions.limit || 0)
		this.limit = conditions.limit

		delete conditions.page
		delete conditions.limit

		if (Object.keys(conditions).length === 0) {
			return
		}

		const clause =
			` WHERE ` +
			Object.keys(conditions)
				.map((k, i) =>
					conditions[k] === null ? `${k} IS NULL` : `${k}::text ILIKE $${i + 1}`
				)
				.join(` AND `)

		this.clause = clause

		this._values = Object.values(conditions)
			.filter((v) => v !== null)
			.map((v) => String(v))
	}

	toString() {
		return this.clause
	}

	get values() {
		return this._values
	}

	get length() {
		return this._values.length
	}

	static from(conditions) {
		return new WhereClause(conditions)
	}
}

// General model for tables
// Note: Constructor values are an injection risk
// and should not be based on user input.
class Model {
	constructor(properties) {
		Object.assign(this, {
			schema: undefined,
			table: 'default_table',
			...properties,
		})
	}

	verifyClient(client) {
		if (!client || !(client instanceof Client)) {
			throw new Error(`Invalid query client for table ${this.table}`)
		}
	}

	get relation() {
		if (this.junction) {
			return this.junction
		}
		if (this.schema) {
			return this.schema + '.' + this.table
		}
		return this.table
	}

	async count(client, conditions) {
		this.verifyClient(client)

		const sql = `SELECT count(*) FROM ${this.relation}`
		const where = WhereClause.from(conditions)

		dbLog(sql)
		const result = await clientQuery(client, sql + where, where.values)
		return result[0].count
	}

	delete(client, conditions) {
		this.verifyClient(client)

		if (!conditions)
			throw new Error(`No WHERE-parameters specified for DELETE.`)

		const where = WhereClause.from(conditions)
		const sql = `DELETE FROM ${this.relation} ${where} RETURNING *`

		dbLog(sql)
		return clientQuery(client, sql, where.values)
	}

	insert(client, item) {
		this.verifyClient(client)

		const columns = Object.keys(item).join(', ')
		const values = Object.values(item)
			.map((_, i) => `$${i + 1}`)
			.join(', ')
		const statement =
			`INSERT INTO ${this.relation} (${columns}) ` +
			`VALUES (${values}) RETURNING *`

		return clientQuery(client, statement, Object.values(item))
	}

	/**
	 * Makes the changes specified in the first object,
	 * given that the conditions in the second object are met.
	 * Ex: update({ price: 19.99 }, { state: 'CA', item_id: 123 })
	 * @param {Object} replace - The key-value pairs to substitute
	 * @param {Object} where - The conditions to meet
	 */
	update(client, replace, where) {
		this.verifyClient(client)

		const whereClause = WhereClause.from(where)
		// Where-clause indices come first,
		// followed by replace-value indices:
		const i0 = whereClause.values.length + 1

		const values = Object.keys(replace)
			.map((column, i) => `${column} = $${i + i0}`)
			.join(', ')
		const statement =
			`UPDATE ${this.relation} ` + `SET ${values}${whereClause} RETURNING *`

		dbLog(statement)

		return clientQuery(client, statement, [
			...whereClause.values,
			...Object.values(replace),
		])
	}

	/**
	 * Columns to retrieve, followed by where-clause object
	 * Ex: find('name', 'age', 'height', {state: 'NY', year: 1999})
	 * @returns promise for query
	 */
	find(client, ...etc) {
		this.verifyClient(client)

		let query = `SELECT * FROM ${this.relation}`

		let where = null
		const parameters = []

		if (etc.length === 0) {
			query += this.orderClause
			dbLog(query)
			return clientQuery(client, query)
		}
		// Otherwise...
		if (typeof etc.at(-1) === 'object') {
			where = WhereClause.from(etc.at(-1))
			etc = etc.slice(0, -1)
		}

		if (etc.length > 0) {
			const columns = etc.join(', ')
			query = `SELECT ${columns} FROM ${this.relation}`
		}

		query += where ?? ''
		query += this.orderClause

		if (where) {
			parameters.push(...where.values)
		}
		if (where?.limit) {
			// Use the DB parser to inject parameters
			query +=
				' LIMIT $' + (where.length + 1) + ' OFFSET $' + (where.length + 2)

			parameters.push(where.limit, where.offset)
		}

		dbLog(query)
		dbLog('parameters: ', dim, parameters)

		return clientQuery(client, query, parameters)
	}

	join(other, key) {
		let newOrder = ''
		if (this.order) {
			newOrder = this.order + (other.order ? ', ' : '')
		}
		if (other.order) {
			newOrder += other.order
		}

		return new Model({
			junction: `${this.relation} JOIN ${other.relation}` + ` USING(${key})`,
			order: newOrder,
		})
	}

	get orderClause() {
		if (!this.order) return ''

		const clause = ` ORDER BY ${this.order}`
		return clause
	}
}

// Instantiate table models
const authors = new Model({
	schema: 'lib',
	table: 'authors',
	order: 'last_name, first_name',
})
// Create books as a junction table (lib.books + lib.authors)
const books = new Model({
	schema: 'lib',
	table: 'books',
	order: 'index_title',
}).join(authors, 'author_id')

// Sometimes you need books without the joined information:
const justBooks = new Model({
	schema: 'lib',
	table: 'books',
	order: 'index_title',
})

const genres = new Model({ schema: 'lib', table: 'genres', order: 'name' })
const bookGenres = new Model({ schema: 'lib', table: 'book_genres' })

const booksByGenre = new Model({
	schema: 'lib',
	table: 'books',
	order: 'index_title',
}).join(bookGenres, 'book_id')

const genresByBook = bookGenres.join(genres, 'genre_id')

const bookInstances = new Model({
	schema: 'lib',
	table: 'book_instance',
	order: 'instance_id',
})

const inventory = books.join(bookInstances, 'book_id')

const spotlightWorks = new Model({
	schema: 'lib',
	table: 'spotlight_works',
	order: 'serial',
})

const suggestions = spotlightWorks.join(justBooks, 'book_id')

/**
 * Retrieve an array of book status strings.
 * @returns Promise
 */
async function bookStatusList(client) {
	if (!client) {
		throw new Error('No client provided to bookStatusList')
	}

	const result = await client.query(
		`SELECT unnest(enum_range(NULL::lib.book_status))`
	)
	if (!result) {
		throw new Error('Missing book status list')
	}
	return result.rows.map((r) => r.unnest)
}

module.exports = {
	trigramTitleQuery,
	trigramAuthorQuery,
	books,
	justBooks,
	authors,
	genres,
	bookInstances,
	inventory,
	booksByGenre,
	genresByBook,
	bookGenres,
	spotlightWorks,
	suggestions,
	bookStatusList,
}
