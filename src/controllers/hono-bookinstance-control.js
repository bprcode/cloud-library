import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
const { paginate } = require('./paginator.js')
const { inventory, bookInstances } = require('../database.js')

const instanceIdValidator = validator('param', async (value, c) => {
	const validated = {}
	const instance_id = value.id?.trim()

	if (!instance_id) {
		c.trouble.add('id', 'Invalid item ID.')
	} else {
		validated.id = instance_id
		const found = await inventory.find(c.client, { instance_id })
		if (!found) {
			c.trouble.add('id', 'Instance not found.')
		} else {
			validated.instance = found[0]
		}
	}

	return validated
})

export const bookinstanceController = {
	bookinstance_create_get: [],
	bookinstance_create_post: [],

	bookinstance_delete_get: [],
	bookinstance_delete_post: [],

	bookinstance_update_get: [],
	bookinstance_update_post: [],

	bookinstance_detail: [
		instanceIdValidator,
		async (c) => {
			const { instance } = c.req.valid('param')

			if (!instance) {
				return c.render(`no_results.hbs`)
			}

			return c.render(`bookinstance_detail.hbs`, {
				book_title: instance.title, // Rename to avoid namespace conflict
				...instance,
			})
		},
	],

	bookinstance_list: [
		withPagination,
		async (c) => {
			const { page, limit } = c.req.valid('query')

			const [itemList, total] = await Promise.all([
				inventory.find(c.client, { page, limit }),

				inventory.count(c.client),
			])

			const position = paginate(page, limit, total)

			return c.render('bookinstance_list.hbs', {
				items: itemList,
				noResults: !itemList,
				...position,
			})
		},
	],
}
