const { Client } = require('pg')
require('@bprcode/handy')
let dbLog = log
if (process.env.NODE_ENV === 'production') {
	dbLog('Silencing database logs in production.', blue)
	dbLog = (_) => {}
}
const http = require('http')

// Drop-in replacement for pg-format,
// which is unsupported on Cloudflare Workers.
// Does not perform sanitization; must not be used for client input.
function format(query, ...args) {
	for (const replacement of args) {
		query = query.replace('%I', replacement)
	}

	return query
}

async function bookUpdateGetQuery(client, bookId) {
	/*
	SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name
parameters: [ '91', [length]: 1 ]
 values: 91
  SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name
parameters: [ '91', [length]: 1 ]
SELECT * FROM lib.genres ORDER BY name
SELECT * FROM lib.authors ORDER BY last_name, first_name
 values: 91
SELECT * FROM lib.book_genres JOIN lib.genres USING(genre_id) WHERE book_id::text ILIKE $1 ORDER BY name
*/
	const results = await Promise.all([
		client.query(
			`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
			bookId
		),
		client.query(
			`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
			bookId
		),
		client.query(
			`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
			bookId
		),
		client.query(
			`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
			bookId
		),
		client.query(
			`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
			bookId
		),
	])
}
async function bookDetailQuery(client, bookId) {
	const results = await Promise.all([
		client.query(
			`SELECT * FROM lib.books JOIN lib.authors ` +
				`USING (author_id) WHERE book_id::text ILIKE $1 ` +
				`ORDER BY index_title, last_name, first_name`,
			[bookId]
		),
		client.query(
			`SELECT * FROM lib.book_instance ` +
				`WHERE book_id::text ILIKE $1 ORDER BY instance_id`,
			[bookId]
		),
		client.query(
			`SELECT * FROM lib.book_genres JOIN lib.genres USING(genre_id) ` +
				`WHERE book_id::text ILIKE $1 ORDER BY name`,
			[bookId]
		),
	])

	return results.map((r) => r.rows)
}

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

async function catalogQuery(client) {
	const results = await Promise.all([
		client.query(
			`SELECT count(*) FROM lib.books JOIN lib.authors USING(author_id)`
		),
		client.query(`SELECT count(*) FROM lib.authors`),
		client.query(`SELECT count(*) FROM lib.genres`),
		client.query(
			`SELECT cover_id, title, snippet, book_url FROM lib.spotlight_works ` +
				`JOIN lib.books USING(book_id) ORDER BY serial, index_title`
		),
	])

	return [
		results[0].rows[0].count,
		results[1].rows[0].count,
		results[2].rows[0].count,
		results[3].rows,
	]
}

async function bookListQuery(client, page, limit) {
	const results = await Promise.all([
		client.query(
			`SELECT book_url, title, snippet, author_url, full_name ` +
				`FROM lib.books JOIN lib.authors USING(author_id) ` +
				`ORDER BY index_title, last_name, first_name LIMIT $1 OFFSET $2`,
			[limit, paginationOffset(page, limit)]
		),
		client.query(`SELECT count(*) FROM lib.books`),
	])

	return [results[0].rows, results[1].rows[0].count]
}

async function allBooksQuery(client) {
	const results = await client.query(
		`SELECT book_url, title, snippet, author_url, full_name ` +
			`FROM lib.books JOIN lib.authors USING(author_id) ` +
			`ORDER BY index_title, last_name, first_name`
	)

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

/**
 * Find all Date objects in a result, and truncate them to YYYY-MM-DD strings.
 * Intended to work around the sometimes-problematic default behavior of pg,
 * wherein dates without timestamps are given "assumed" timestamps.
 * @param {*} source - An object, array of objects, or promise which resolves
 * to an object or array of objects, from which to convert Date objects into
 * date strings.
 */
async function snipTimes(source) {
	function snipObject(o) {
		for (const key in o) {
			if (o[key] instanceof Date) o[key] = o[key].toISOString().split('T')[0]
		}
	}

	const result = await source

	if (Array.isArray(result)) {
		for (const r of result) snipObject(r)
	} else {
		snipObject(result)
	}

	return result
}

function paginationOffset(page, limit) {
	return (page - 1) * limit || 0
}

/**
 * Remove and return the internal _page and _limit properties
 * from a condition object, along with the calculated offset.
 * @param {*} conditions - The object to modify.
 */
function snipPagination(conditions) {
	const snipped = {
		page: conditions._page || 1,
		limit: conditions._limit, // leave undefined if not paginated
	}
	snipped.offset = (snipped.page - 1) * snipped.limit || 0
	delete conditions._page
	delete conditions._limit
	return snipped
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

		if ('_page' in conditions) {
			throw new Error('_page is deprecated; where-clause needs revision.')
		}

		const pagination = snipPagination(conditions)

		this.offset = (conditions.page - 1) * (conditions.limit || 0)
		this.limit = conditions.limit

		delete conditions.page
		delete conditions.limit

		if (Object.keys(conditions).length === 0) {
			return
		}

		const dirty =
			' WHERE ' +
			Object.keys(conditions)
				.map((k) =>
					conditions[k] === null ? '%I IS NULL' : '%I::text ILIKE $' + index++
				)
				.join(' AND ')

		this.clause = format(dirty, ...Object.keys(conditions))
		this._values = Object.values(conditions)
			.filter((v) => v !== null)
			.map((v) => String(v))
	}

	toString() {
		return this.clause
	}

	get values() {
		this._values.length &&
			dbLog(' values: ', pink, this._values.join(', '), green)
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
			log('Missing valid query client for ', pink, this.table)
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

		dbLog(sql, green)
		const result = await clientQuery(client, sql + where, where.values)
		return result[0].count
	}

	delete(client, conditions) {
		this.verifyClient(client)

		if (!conditions)
			throw new Error(`No WHERE-parameters specified for DELETE.`)

		const where = WhereClause.from(conditions)
		const sql = `DELETE FROM ${this.relation} ${where}` + ` RETURNING *`

		dbLog(sql, pink)
		return clientQuery(client, sql, where.values)
	}

	insert(client, item) {
		this.verifyClient(client)

		let clean = ``
		let dirty =
			`INSERT INTO ${this.relation} (` +
			Array(Object.keys(item).length).fill('%I').join(', ') +
			`) VALUES (` +
			Object.values(item)
				.map((_, i) => `$` + (i + 1))
				.join(', ') +
			`) RETURNING *`

		dbLog(dirty, yellow)
		clean = format(dirty, ...Object.keys(item))
		dbLog(clean, blue)

		return clientQuery(client, clean, Object.values(item))
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

		let clean = ``
		let dirty = `UPDATE ${this.relation} SET `
		const whereClause = WhereClause.from(where)
		// Where-clause indices come first,
		// followed by replace-value indices:
		let i = whereClause.values.length + 1

		dirty += Object.keys(replace)
			.map((_) => `%I = $` + i++)
			.join(', ')

		dirty += whereClause
		dirty += ` RETURNING *`

		clean = format(dirty, ...Object.keys(replace))

		dbLog(dirty, yellow)
		dbLog(clean, blue)

		return clientQuery(client, clean, [
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

		let clean = ``
		let dirty = `SELECT * FROM ${this.relation}`
		let where = null
		const parameters = []

		if (etc.length === 0) {
			dirty += this.orderClause
			dbLog(dirty, yellow)
			return clientQuery(client, dirty) // Nothing to sanitize
		}
		// Otherwise...
		if (typeof etc.at(-1) === 'object') {
			where = WhereClause.from(etc.at(-1))
			etc = etc.slice(0, -1)
		}

		if (etc.length > 0) {
			dirty =
				`SELECT ` +
				Array(etc.length).fill(`%I`).join(`, `) +
				` FROM ${this.relation}`
		}

		dirty += where ?? ''
		dirty += this.orderClause

		if (where) {
			parameters.push(...where.values)
		}
		if (where?.limit) {
			// Use the DB parser to inject parameters
			dirty +=
				' LIMIT $' + (where.length + 1) + ' OFFSET $' + (where.length + 2)

			parameters.push(where.limit, where.offset)
		}

		clean = format(
			dirty,
			...etc, // column names
			this.order
		)

		dbLog(clean, blue)
		dbLog('parameters: ', dim, parameters)

		return clientQuery(client, clean, parameters)
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
		let dirty =
			` ORDER BY ` + Array(this.order.split(', ').length).fill('%I').join(', ')
		let clean = format(dirty, ...this.order.split(', '))
		return clean
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

	const result = await client.query(`SELECT unnest(enum_range(NULL::lib.book_status))`)
	if(!result) {
		throw new Error('Missing book status list')
	}
	return result.rows.map(r => r.unnest)
}

module.exports = {
	bookDetailQuery,
	trigramTitleQuery,
	trigramAuthorQuery,
	catalogQuery,
	bookListQuery,
	allBooksQuery,
	snipTimes,
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
