import { validator } from 'hono/validator'

function validatePagination(value, c) {
	let page = Math.max(1, parseInt(value.page) || 1)
	let limit = Math.max(1, parseInt(value.limit) || 10)

	return { page, limit }
}

export const withPagination = validator('query', validatePagination)
