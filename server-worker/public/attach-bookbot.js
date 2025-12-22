async function requestSummary() {
	const title = document.getElementById('title-id')?.value
	const select = document.getElementById('select-author-id')
	const selected = select?.selectedOptions[0]?.textContent
	const summary = document.getElementById('summary-id')

	let author = null
	if (select && selected !== 'Select author...') {
		const split = selected.split(', ')
		if (split.length > 1) {
			author = `${split[1]} ${split[0]}`
		} else {
			author = split[0]
		}
	}

	if (!select) {
		const firstName = document.getElementById('first-id').value
		const lastName = document.getElementById('last-id').value

		author = firstName
		if (lastName.length) {
			author += ' ' + lastName
		}
	}

	if (!title) {
		setSummaryError('Title required.')
		return
	}

	const bookbot = await fetch('/bookbot')

	const bookbotUrl = await bookbot.text()

	const url = new URL(bookbotUrl)

	url.searchParams.set('type', 'summary')
	url.searchParams.set('title', title)
	if (author) {
		url.searchParams.set('author', author)
	}

	const source = new EventSource(url.toString())

	let firstPacket = true
	const priorText = summary.value

	const { promise, resolve } = Promise.withResolvers()

	const close = () => {
		source.close()
		if (summary.value.toLocaleLowerCase().includes('invalid prompt')) {
			summary.value = priorText
			if (author) {
				setSummaryError('This title/author combination was not found.')
			} else {
				setSummaryError('This title was not found.')
			}
		}
		resolve()
	}

	source.addEventListener('message', (event) => {
		if (event.data === '[DONE]') {
			close()
			return
		}

		const data = JSON.parse(event.data)

		if (data.error) {
			setSummaryError(data.error)
			close()
			return
		}

		if (data.response) {
			if (firstPacket) {
				firstPacket = false
				summary.value = ''
			}
			summary.value += data.response
		}
	})

	source.addEventListener('error', (error) => {
		console.error(error)
		close()
	})

	return promise
}

function setSummaryError(message) {
	document.getElementById('summary-id').classList.add('is-invalid')
	document.getElementById('summary-errors').textContent = message
}

function clearSummaryError() {
	document.getElementById('summary-id').classList.remove('is-invalid')
	document.getElementById('summary-errors').textContent = ''
}

export function attachSummarizer() {
	const summaryContainer = document.getElementById('summary-container')
	if (summaryContainer) {
		const button = document.createElement('button')

		button.className = 'btn btn-primary fw-semibold mt-3 mb-3'
		button.textContent = 'Suggest summary '
		button.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
  </svg>`
		button.type = 'button'
		button.addEventListener('click', async () => {
			button.disabled = true
			await requestSummary()
			button.disabled = false
		})

		summaryContainer.appendChild(button)

		document
			.getElementById('title-id')
			?.addEventListener('input', clearSummaryError)
		document
			.getElementById('select-author-id')
			?.addEventListener('input', clearSummaryError)
	}
}
