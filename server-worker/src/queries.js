export function verifyEqual(a, b) {
	console.log('🟪 DEEP EQUAL?', deepEqual(a, b) ? '✅' : '🛑')
}

function emptyAsNull(rows) {
	return rows?.length === 0 ? null : rows
}

// postgres.js-based query list
export const queries = {
	test: (sql) => sql`SELECT count(*) from lib.authors`,

	catalog: (sql) =>
		Promise.all([
			sql`SELECT count(*) FROM lib.books JOIN lib.authors USING(author_id)`.then(
				(x) => x[0].count
			),
			sql`SELECT count(*) FROM lib.authors`.then((x) => x[0].count),
			sql`SELECT count(*) FROM lib.genres`.then((x) => x[0].count),
			sql`SELECT cover_id, title, snippet, book_url FROM lib.spotlight_works JOIN lib.books USING(book_id) ORDER BY serial, index_title`.then(
				emptyAsNull
			),
		]),

	catalog_books: (sql, limit, page) =>
		Promise.all([
			sql`SELECT book_url, title, snippet, author_url, full_name FROM lib.books JOIN lib.authors USING(author_id) ORDER BY index_title, last_name, first_name LIMIT ${limit} OFFSET ${
				limit * (page - 1)
			}`.then(emptyAsNull),
			sql`SELECT count(*) FROM lib.books`.then((x) => x[0].count),
		]),

	book_detail: (sql, book_id) =>
		Promise.all([
			sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE ${book_id} ORDER BY index_title, last_name, first_name`.then(
				emptyAsNull
			),
			sql`SELECT * FROM lib.book_instance WHERE book_id::text ILIKE ${book_id} ORDER BY instance_id`.then(
				emptyAsNull
			),
			sql`SELECT * FROM lib.book_genres JOIN lib.genres USING(genre_id) WHERE book_id::text ILIKE ${book_id} ORDER BY name`.then(
				emptyAsNull
			),
		]),

	book_by_id: (sql, book_id) =>
		sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE ${book_id} ORDER BY index_title, last_name, first_name`.then(
			emptyAsNull
		),

	book_by_title: (sql, title) =>
		sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE ${title} ORDER BY index_title, last_name, first_name`.then(
			emptyAsNull
		),

	author_by_id: (sql, author_id) =>
		sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE ${author_id} ORDER BY last_name, first_name`.then(
			emptyAsNull
		),

	book_genre_checks: (sql, book_id) =>
		sql`SELECT * FROM lib.book_genres JOIN lib.genres USING(genre_id) WHERE book_id::text ILIKE ${book_id} ORDER BY name`.then(
			emptyAsNull
		),

	all_genres: (sql) =>
		sql`SELECT * FROM lib.genres ORDER BY name`.then(emptyAsNull),

	all_authors: (sql) =>
		sql`SELECT * FROM lib.authors ORDER BY last_name, first_name`.then(
			emptyAsNull
		),

	delete_book_genre_by_book_id: (sql, book_id) =>
		sql`DELETE FROM lib.book_genres  WHERE book_id::text ILIKE ${book_id} RETURNING *`.then(
			emptyAsNull
		),

	update_book: (sql, book_id, title, isbn, author_id, summary) =>
		sql`UPDATE lib.books SET title = ${title}, isbn = ${isbn}, author_id = ${author_id}, summary = ${summary} WHERE book_id::text ILIKE ${book_id} RETURNING *`,

	all_genre_ids: (sql) =>
		sql`SELECT array_agg(genre_id) AS all_ids FROM lib.genres`,

	insert_book_genres: (sql, values) =>
		sql`INSERT INTO lib.book_genres ${sql(values, 'book_id', 'genre_id')}`,

	instances_by_book_id: (sql, book_id) =>
		sql`SELECT * FROM lib.book_instance WHERE book_id::text ILIKE ${book_id} ORDER BY instance_id`.then(
			emptyAsNull
		),

	delete_book: (sql, book_id) =>
		sql`DELETE FROM lib.books WHERE book_id::text ILIKE ${book_id} RETURNING *`.then(
			emptyAsNull
		),

	create_book: (sql, title, isbn, author_id, summary) =>
		sql`INSERT INTO lib.books (title, isbn, author_id, summary) VALUES (${title}, ${isbn}, ${author_id}, ${summary}) RETURNING *`,

	author_full_name_by_id: (sql, author_id) =>
		sql`SELECT full_name FROM lib.authors WHERE author_id::text ILIKE ${author_id}`,

	insert_spotlight_work: (sql, cover_id, book_id) =>
		sql`INSERT INTO lib.spotlight_works (cover_id, book_id) VALUES (${cover_id}, ${book_id})`,

	books_with_ids: (sql) =>
		sql`SELECT book_id, title FROM lib.books ORDER BY index_title`,

	author_list: (sql, limit, page) =>
		Promise.all([
			sql`SELECT full_name, dob, dod, author_url, blurb FROM lib.authors ORDER BY last_name, first_name LIMIT ${limit} OFFSET ${
				limit * (page - 1)
			}`.then(emptyAsNull),
			sql`SELECT count(*) FROM lib.authors`.then((x) => x[0].count),
		]),

	authors_with_ids: (sql) =>
		sql`SELECT first_name, last_name, author_id FROM lib.authors ORDER BY last_name`,

	author_by_id: (sql, author_id) =>
		sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE ${author_id} ORDER BY last_name, first_name`,

	books_by_author: (sql, author_id) =>
		sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE author_id::text ILIKE ${author_id} ORDER BY index_title, last_name, first_name`.then(
			emptyAsNull
		),

	author_by_first_and_last: (sql, first_name, last_name) =>
		sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE ${first_name} AND last_name::text ILIKE ${last_name} ORDER BY last_name, first_name`.then(
			emptyAsNull
		),

	update_author: (sql, author_id, first_name, last_name, dob, dod, bio) =>
		sql`UPDATE lib.authors SET first_name = ${first_name}, last_name = ${last_name}, dob = ${dob}, dod = ${dod}, bio = ${bio} WHERE author_id::text ILIKE ${author_id} RETURNING *`,

	create_author: (sql, first_name, last_name, dob, dod, bio) =>
		sql`INSERT INTO lib.authors (first_name, last_name, dob, dod, bio) VALUES (${first_name}, ${last_name}, ${dob}, ${dod}, ${bio}) RETURNING *`,

	delete_author: (sql, author_id) =>
		sql`DELETE FROM lib.authors  WHERE author_id::text ILIKE ${author_id} RETURNING *`,

	just_book_by_id: (sql, book_id) =>
		sql`SELECT * FROM lib.books WHERE book_id::text ILIKE ${book_id} ORDER BY index_title`.then(
			emptyAsNull
		),

	create_instance: (sql, book_id, imprint, status, due_back) =>
		sql`INSERT INTO lib.book_instance (book_id, imprint, status, due_back) VALUES (${book_id}, ${imprint}, ${status}, ${due_back}) RETURNING *`,

	instance_with_details: (sql, instance_id) =>
		sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE ${instance_id} ORDER BY index_title, last_name, first_name, instance_id`.then(
			emptyAsNull
		),

	delete_instance: (sql, instance_id) =>
		sql`DELETE FROM lib.book_instance WHERE instance_id::text ILIKE ${instance_id} RETURNING *`,

	update_instance: (sql, instance_id, book_id, imprint, due_back, status) =>
		sql`UPDATE lib.book_instance SET book_id = ${book_id}, imprint = ${imprint}, due_back = ${due_back}, status = ${status} WHERE instance_id::text ILIKE ${instance_id} RETURNING *`,

	bookinstance_list: (sql, limit, page) =>
		Promise.all([
			sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) ORDER BY index_title, last_name, first_name, instance_id LIMIT ${limit} OFFSET ${
				limit * (page - 1)
			}`,
			sql`SELECT count(*) FROM lib.book_instance`.then((x) => x[0].count),
		]),

    genre_list: (sql, limit, page) => Promise.all([
      sql`SELECT * FROM lib.genres ORDER BY name LIMIT ${limit} OFFSET ${limit * (page - 1)}`,
      sql`SELECT count(*) FROM lib.genres`.then((x) => x[0].count),

    ]),

    genre_detail: (sql, genre_id) => Promise.all([

      sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE ${genre_id} ORDER BY name`.then(emptyAsNull),
  
      sql`SELECT * FROM lib.books JOIN lib.book_genres USING(book_id) WHERE genre_id::text ILIKE ${genre_id} ORDER BY index_title`.then(emptyAsNull),
    ]),

    genre_by_id: (sql, genre_id) => sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE ${genre_id} ORDER BY name`.then(emptyAsNull),

    genre_by_name: (sql, name) => sql`SELECT * FROM lib.genres WHERE name::text ILIKE ${name} ORDER BY name`.then(emptyAsNull),

    update_genre: (sql, genre_id, name) => sql`UPDATE lib.genres SET name = ${name} WHERE genre_id::text ILIKE ${genre_id} RETURNING *`,

    create_genre: (sql, name) => sql`INSERT INTO lib.genres (name) VALUES (${name}) RETURNING *`,

    delete_genre: (sql, genre_id) => sql`DELETE FROM lib.genres  WHERE genre_id::text ILIKE ${genre_id} RETURNING *`,

    create_book_genre_association: (sql, book_id, genre_id) => sql`INSERT INTO lib.book_genres (book_id, genre_id) VALUES (${book_id}, ${genre_id}) RETURNING *`.then(emptyAsNull),

    genres_with_ids: (sql) => sql`SELECT genre_id, name FROM lib.genres ORDER BY name`,

    all_genres: (sql) => sql`SELECT * FROM lib.genres ORDER BY name`,

	bookStatusList: (sql) =>
		sql`SELECT unnest(enum_range(NULL::lib.book_status))`.then((x) =>
			x.map((y) => y.unnest)
		),
	trigramTitleQuery: async (sql, fuzzy) => {
		return await sql.begin(async (sql) => {
			await sql`SET LOCAL pg_trgm.similarity_threshold = 0.05`
			return await sql`
      SELECT 
				book_url,
				title,
				snippet,
				author_url,
				full_name,
			(CASE
				WHEN title ~* ('\\m' || ${fuzzy} ) THEN 10
				WHEN title ILIKE '%' || ${fuzzy} || '%' THEN 5
				ELSE 0
			END)
				+ word_similarity(title, ${fuzzy})
				AS score
				FROM lib.books JOIN lib.authors USING(author_id)
				WHERE title % ${fuzzy}
				ORDER BY score DESC
				LIMIT 100
      `
		})
	},

	trigramAuthorQuery: async (sql, fuzzy) => {
		return await sql.begin(async (sql) => {
			await sql`SET LOCAL pg_trgm.similarity_threshold = 0.05`
			return await sql`
      SELECT full_name, dob, dod, author_url, blurb,
				(CASE
					WHEN full_name ~* ('\\m' || ${fuzzy} ) THEN 10
					WHEN full_name ILIKE '%' || ${fuzzy} || '%' THEN 5
					ELSE 0
				END)
					+ word_similarity(full_name, ${fuzzy}) 
					AS score
					FROM lib.authors
					WHERE full_name % ${fuzzy}
					ORDER BY score DESC
					LIMIT 20
      `
		})
	},
}

export function deepEqual(a, b) {
	if (a === b) return true

	if (
		typeof a !== 'object' ||
		a === null ||
		typeof b !== 'object' ||
		b === null
	) {
		console.error(a, '❌', b)
		return false
	}

	const keysA = Object.keys(a)
	const keysB = Object.keys(b)

	if (keysA.length !== keysB.length) {
		console.error(
			'❌ Length mismatch: |A| = ',
			keysA.length,
			'... |B| = ',
			keysB.length
		)
		console.error(keysA)
		console.error(keysB)
		return false
	}

	for (const key of keysA) {
		if (!keysB.includes(key)) {
			console.error('❌ Key mismatch on', key)
		}
		if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
			console.log(`🔑 ${key}`)

			return false
		}
	}

	return true
}

/*

console.log('🟦 COMPARE 1', result)
console.log('🟧 COMPARE 2', cfResult)


*/

/*
/catalog
/catalog/books
/catalog/book/:id

/catalog/book/:id/update
	
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	
	sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	
	
	
	
/catalog/book/:id/delete
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	sql`SELECT * FROM lib.book_instance WHERE book_id::text ILIKE $1 ORDER BY instance_id`,
	sql`DELETE FROM lib.books  WHERE book_id::text ILIKE $1 RETURNING *`,
/catalog/author/:id
	sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE author_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
/catalog/genre/:id
	sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	sql`SELECT * FROM lib.books JOIN lib.book_genres USING(book_id) WHERE genre_id::text ILIKE $1 ORDER BY index_title`,
	sql`SELECT count(*) FROM lib.books JOIN lib.book_genres USING(book_id)`,
/catalog/inventory/:id
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE $1 ORDER BY index_title, last_name, first_name, instance_id`,
/catalog/authors
	sql`SELECT full_name, dob, dod, author_url, blurb FROM lib.authors ORDER BY last_name, first_name LIMIT $1 OFFSET $2`,
	sql`SELECT count(*) FROM lib.authors`,
/catalog/author/:id/update
	sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE $1 AND last_name::text ILIKE $2 ORDER BY last_name, first_name`,
	sql`UPDATE lib.authors SET first_name = $2, last_name = $3, dob = $4, dod = $5, bio = $6 WHERE author_id::text ILIKE $1 RETURNING *`,
/catalog/author/:id/delete
	sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE author_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	sql`DELETE FROM lib.authors  WHERE author_id::text ILIKE $1 RETURNING *`,
/catalog/book/create
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	sql`SELECT full_name FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
/catalog/author/create
	sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE $1 AND last_name IS NULL ORDER BY last_name, first_name`,
/catalog/genres
	sql`SELECT * FROM lib.genres ORDER BY name LIMIT $1 OFFSET $2`,
	sql`SELECT count(*) FROM lib.genres`,
/catalog/genre/:id/update
	sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	sql`SELECT * FROM lib.genres WHERE name::text ILIKE $1 ORDER BY name`,
	sql`UPDATE lib.genres SET name = $2 WHERE genre_id::text ILIKE $1 RETURNING *`,
/catalog/genre/create
	sql`SELECT * FROM lib.genres WHERE name::text ILIKE $1 ORDER BY name`,
/catalog/genre/:id/delete
	sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	sql`DELETE FROM lib.genres  WHERE genre_id::text ILIKE $1 RETURNING *`,
/catalog/inventory
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) ORDER BY index_title, last_name, first_name, instance_id LIMIT $1 OFFSET $2`,
	sql`SELECT count(*) FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id)`,
/catalog/inventory/:id/update
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE $1 ORDER BY index_title, last_name, first_name, instance_id`,
	sql`SELECT * FROM lib.books WHERE book_id::text ILIKE $1 ORDER BY index_title`,
	sql`UPDATE lib.book_instance SET book_id = $2, imprint = $3, due_back = $4, status = $5 WHERE instance_id::text ILIKE $1 RETURNING *`,
/catalog/inventory/:id/delete
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE $1 ORDER BY index_title, last_name, first_name, instance_id`,
	sql`DELETE FROM lib.book_instance  WHERE instance_id::text ILIKE $1 RETURNING *`,
/catalog/inventory/create
	sql`SELECT * FROM lib.books WHERE book_id::text ILIKE $1 ORDER BY index_title`,
	sql`SELECT * FROM lib.books ORDER BY index_title`,
/catalog/genre/json
	sql`SELECT * FROM lib.genres ORDER BY name`,
/catalog/author/json
	sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE $1 AND last_name::text ILIKE $2 ORDER BY last_name, first_name`,
/catalog/book/json
	sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
*/

async function authorsWithIds(sql) {
	return await sql`
			SELECT first_name, last_name, author_id
			FROM lib.authors
			ORDER BY last_name
		`
}

async function genresWithIds(sql) {
	return await sql`
			SELECT genre_id, name
			FROM lib.genres
			ORDER BY name
		`
}

async function booksWithIds(sql) {
	return await sql`
			SELECT book_id, title
			FROM lib.books
			ORDER BY index_title
		`
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
