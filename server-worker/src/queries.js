// postgres.js-based query list
export const queries = {
  test: sql => sql`SELECT count(*) from lib.authors`,
  catalog: sql => [
    sql`SELECT count(*) FROM lib.books JOIN lib.authors USING(author_id)`.then(x => x[0].count),
    sql`SELECT count(*) FROM lib.authors`.then(x => x[0].count),
    sql`SELECT count(*) FROM lib.genres`.then(x => x[0].count),
    sql`SELECT cover_id, title, snippet, book_url FROM lib.spotlight_works JOIN lib.books USING(book_id) ORDER BY serial, index_title`,
  ]
}

/*

console.log('🟦 COMPARE 1', result)
console.log('🟧 COMPARE 2', cfResult)

*/

/*
/catalog
/catalog/books
	foo: async(sql) => sql`SELECT book_url, title, snippet, author_url, full_name FROM lib.books JOIN lib.authors USING(author_id) ORDER BY index_title, last_name, first_name LIMIT $1 OFFSET $2`,
	foo: async(sql) => sql`SELECT count(*) FROM lib.books`,
/catalog/book/:id
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.book_instance WHERE book_id::text ILIKE $1 ORDER BY instance_id`,
	foo: async(sql) => sql`SELECT * FROM lib.book_genres JOIN lib.genres USING(genre_id) WHERE book_id::text ILIKE $1 ORDER BY name`,
/catalog/book/:id/update
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.book_genres JOIN lib.genres USING(genre_id) WHERE book_id::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`SELECT * FROM lib.genres ORDER BY name`,
	foo: async(sql) => sql`SELECT * FROM lib.authors ORDER BY last_name, first_name`,
	foo: async(sql) => sql`DELETE FROM lib.book_genres  WHERE book_id::text ILIKE $1 RETURNING *`,
	foo: async(sql) => sql`UPDATE lib.books SET title = $2, isbn = $3, author_id = $4, summary = $5 WHERE book_id::text ILIKE $1 RETURNING *`,
/catalog/book/:id/delete
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE book_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.book_instance WHERE book_id::text ILIKE $1 ORDER BY instance_id`,
	foo: async(sql) => sql`DELETE FROM lib.books  WHERE book_id::text ILIKE $1 RETURNING *`,
/catalog/author/:id
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE author_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
/catalog/genre/:id
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.book_genres USING(book_id) WHERE genre_id::text ILIKE $1 ORDER BY index_title`,
	foo: async(sql) => sql`SELECT count(*) FROM lib.books JOIN lib.book_genres USING(book_id)`,
/catalog/inventory/:id
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE $1 ORDER BY index_title, last_name, first_name, instance_id`,
/catalog/authors
	foo: async(sql) => sql`SELECT full_name, dob, dod, author_url, blurb FROM lib.authors ORDER BY last_name, first_name LIMIT $1 OFFSET $2`,
	foo: async(sql) => sql`SELECT count(*) FROM lib.authors`,
/catalog/author/:id/update
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE $1 AND last_name::text ILIKE $2 ORDER BY last_name, first_name`,
	foo: async(sql) => sql`UPDATE lib.authors SET first_name = $2, last_name = $3, dob = $4, dod = $5, bio = $6 WHERE author_id::text ILIKE $1 RETURNING *`,
/catalog/author/:id/delete
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE author_id::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`DELETE FROM lib.authors  WHERE author_id::text ILIKE $1 RETURNING *`,
/catalog/book/create
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`SELECT full_name FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
/catalog/author/create
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE $1 AND last_name IS NULL ORDER BY last_name, first_name`,
/catalog/genres
	foo: async(sql) => sql`SELECT * FROM lib.genres ORDER BY name LIMIT $1 OFFSET $2`,
	foo: async(sql) => sql`SELECT count(*) FROM lib.genres`,
/catalog/genre/:id/update
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE name::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`UPDATE lib.genres SET name = $2 WHERE genre_id::text ILIKE $1 RETURNING *`,
/catalog/genre/create
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE name::text ILIKE $1 ORDER BY name`,
/catalog/genre/:id/delete
	foo: async(sql) => sql`SELECT * FROM lib.genres WHERE genre_id::text ILIKE $1 ORDER BY name`,
	foo: async(sql) => sql`DELETE FROM lib.genres  WHERE genre_id::text ILIKE $1 RETURNING *`,
/catalog/inventory
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) ORDER BY index_title, last_name, first_name, instance_id LIMIT $1 OFFSET $2`,
	foo: async(sql) => sql`SELECT count(*) FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id)`,
/catalog/inventory/:id/update
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE $1 ORDER BY index_title, last_name, first_name, instance_id`,
	foo: async(sql) => sql`SELECT * FROM lib.books WHERE book_id::text ILIKE $1 ORDER BY index_title`,
	foo: async(sql) => sql`UPDATE lib.book_instance SET book_id = $2, imprint = $3, due_back = $4, status = $5 WHERE instance_id::text ILIKE $1 RETURNING *`,
/catalog/inventory/:id/delete
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) JOIN lib.book_instance USING(book_id) WHERE instance_id::text ILIKE $1 ORDER BY index_title, last_name, first_name, instance_id`,
	foo: async(sql) => sql`DELETE FROM lib.book_instance  WHERE instance_id::text ILIKE $1 RETURNING *`,
/catalog/inventory/create
	foo: async(sql) => sql`SELECT * FROM lib.books WHERE book_id::text ILIKE $1 ORDER BY index_title`,
	foo: async(sql) => sql`SELECT * FROM lib.books ORDER BY index_title`,
/catalog/genre/json
	foo: async(sql) => sql`SELECT * FROM lib.genres ORDER BY name`,
/catalog/author/json
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE first_name::text ILIKE $1 AND last_name::text ILIKE $2 ORDER BY last_name, first_name`,
/catalog/book/json
	foo: async(sql) => sql`SELECT * FROM lib.books JOIN lib.authors USING(author_id) WHERE title::text ILIKE $1 ORDER BY index_title, last_name, first_name`,
	foo: async(sql) => sql`SELECT * FROM lib.authors WHERE author_id::text ILIKE $1 ORDER BY last_name, first_name`,
*/
