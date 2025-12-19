import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
import { paginate } from './paginator'
const {
	inventory,
	bookInstances,
	justBooks,
	bookStatusList,
	snipTimes,
} = require('../database.js')

const instanceIdValidator = validator('param', async (value, c) => {
	const validated = {}
	const instance_id = value.id?.trim()

	if (!instance_id) {
		c.trouble.add('id', 'Invalid item ID.')
	} else {
		validated.instance_id = instance_id
		const found = await inventory.find(c.client, { instance_id })
		if (!found) {
			c.trouble.add('id', 'Instance not found.')
		} else {
			validated.instance = await snipTimes(found[0])
		}
	}

	return validated
})

async function instanceBodyValidator(value, c) {
	const validated = {}

	const book_id = value.book_id?.trim() ?? '-1'
	if (!(await justBooks.find(c.client, { book_id }))) {
		c.trouble.add('book_id', 'No book matched book id.')
	} else {
		validated.book_id = book_id
	}

	const imprint = value.imprint?.trim()
	if (!imprint) {
		c.trouble.add('imprint', 'Imprint required')
	} else {
		validated.imprint = imprint
	}

	const status = value.status
	if (!status) {
		c.trouble.add('status', 'Invalid status.')
	} else {
		const validStatusList = await bookStatusList(c.client)
		if (!validStatusList.includes(status)) {
			c.trouble.add('status', 'Status not recognized.')
		} else {
			validated.status = status
		}
	}

	if (value.due_back) {
		const due_back = value.due_back
		if (Number.isNaN(Date.parse(due_back))) {
			c.trouble.add('due_back', 'Invalid date')
		} else {
			validated.due_back = due_back
		}
	}

	return validated
}

const instanceFormValidator = validator('form', instanceBodyValidator)

export const bookinstanceController = {
	bookinstance_create_get: [
		async (c) => {
			const [bookList, statusList] = await Promise.all([
				justBooks.find(c.client),
				bookStatusList(c.client),
			])

			const book_id = c.req.param('id') ?? null

			return c.render(`bookinstance_form.hbs`, {
				bookList,
				statusList,
				title: 'Add inventory item',
				form_action: '/catalog/inventory/create',
				submit: 'Create',
				populate: { book_id },
			})
		},
	],

	bookinstance_create_post: [
		instanceFormValidator,
		async (c) => {
			const [bookList, statusList] = await Promise.all([
				justBooks.find(c.client),
				bookStatusList(c.client),
			])

			const validated = c.req.valid('form')
			const item = {
				book_id: validated.book_id,
				imprint: validated.imprint,
				status: validated.status,
				due_back: validated.due_back,
			}

			if (!c.trouble.isEmpty()) {
				return c.render(
					`bookinstance_form.hbs`,
					{
						bookList,
						statusList,
						trouble: c.trouble.array(),
						title: 'Add inventory item',
						form_action: '/catalog/inventory/create',
						submit: 'Create',
						populate: item,
					},
					400
				)
			}

			if (!validated.due_back) delete item.due_back // Allow database to handle default

			try {
				const [result] = await bookInstances.insert(c.client, item)
				return c.redirect(result.book_instance_url)
			} catch (e) {
				log.err(e.message)
				throw e
			}
		},
	],

	bookinstance_delete_get: [
		instanceIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/inventory`)
			}

			const { instance } = c.req.valid('param')
			return c.render(`bookinstance_delete.hbs`, { item: instance })
		},
	],
	bookinstance_delete_post: [
		instanceIdValidator,
		async (c) => {
			if (c.trouble.isEmpty()) {
				const { instance_id } = c.req.valid('param')
				await bookInstances.delete(c.client, { instance_id })
			}

			return c.redirect(`/catalog/inventory`)
		},
	],

	bookinstance_update_get: [
		instanceIdValidator,
		async (c) => {
			if (!c.trouble.isEmpty()) {
				return c.redirect(`/catalog/inventory/update`)
			}

			const { instance } = c.req.valid('param')

			const [bookList, statusList] = await Promise.all([
				justBooks.find(c.client),
				bookStatusList(c.client),
			])

			return c.render(`bookinstance_form.hbs`, {
				bookList,
				statusList,
				title: 'Edit inventory item',
				form_action: undefined,
				submit: 'Save Changes',
				populate: instance,
			})
		},
	],
	bookinstance_update_post: [
		instanceIdValidator,
		instanceFormValidator,
		async (c) => {
			const { instance_id } = c.req.valid('param')
			const validated = c.req.valid('form')
			const item = {
				book_id: validated.book_id,
				imprint: validated.imprint,
				due_back: validated.due_back || null,
				status: validated.status,
			}

			if (!c.trouble.isEmpty()) {
				if (c.trouble.array().find((e) => e.param === 'id')) {
					return c.redirect(`/catalog/inventory`)
				}

				const [bookList, statusList] = await Promise.all([
					justBooks.find(c.client),
					bookStatusList(c.client),
				])

				return c.render(
					`bookinstance_form.hbs`,
					{
						bookList,
						statusList,
						trouble: c.trouble.array(),
						title: 'Edit inventory item',
						form_action: undefined,
						submit: 'Save Changes',
						populate: item,
					},
					400
				)
			}

			const [result] = await bookInstances.update(c.client, item, {
				instance_id,
			})

			return c.redirect(result.book_instance_url)
		},
	],

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
