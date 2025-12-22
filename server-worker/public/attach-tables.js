async function fetchAuthorIds() {
	const response = await fetch('/catalog/authors/ids')
	const list = await response.json()
	return list
}

async function fetchGenreIds() {
	const response = await fetch('/catalog/genres/ids')
	const list = await response.json()
	return list
}

async function fetchBookIds() {
	const response = await fetch('/catalog/books/ids')
	const list = await response.json()
	return list
}

export async function populateInventoryTitleSelect(selectedId) {
	const select = document.getElementById('title-id')

	if (!select) {
		console.error('Inventory page missing select object.')
		return
	}

	if (select.options.length > 1) {
		console.error('Select already populated.')
		return
	}

	const books = await fetchBookIds()

	for (const b of books) {
		const option = new Option(b.title, b.book_id)
		select.add(option)
	}

	if(selectedId !== undefined) {
		select.value = selectedId
	}
}

export async function populateAuthorIds(selectedId) {
	const select = document.getElementById('select-author-id')

	if (!select) {
		console.error('Page missing select object.')
		return
	}

	if (select.options.length > 1) {
		console.error('Select already populated.')
		return
	}

	const authors = await fetchAuthorIds()

	for (const author of authors) {
		const indexName =
			author.last_name?.length > 0
				? `${author.last_name}, ${author.first_name}`
				: author.first_name
		const option = new Option(indexName, author.author_id)
		select.add(option)
	}

	select.value = selectedId
}

export async function populateGenreCheckboxes(checkSet) {
	const container = document.getElementById('genre-checkboxes-container')

	if (!container) {
		console.error('Page missing genre checkbox container.')
		return
	}

	const genres = await fetchGenreIds()

	for (const g of genres) {
		const div = document.createElement('div')
		const input = document.createElement('input')
		const label = document.createElement('label')

		div.className = 'form-check min-tiny'
		input.className = 'form-check-input'
		label.className = 'text-break'

		input.type = 'checkbox'
		input.name = `genre-${g.genre_id}`
		input.id = `cb-${g.genre_id}`
		if (checkSet.has(g.genre_id)) {
			input.checked = true
		}

		label.htmlFor = `cb-${g.genre_id}`
		label.textContent = `${g.name}`

		div.append(input)
		div.append(label)

		container.append(div)
	}
}
