import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
import { paginate } from './paginator'
import { queries } from '../queries'

const instanceIdValidator = validator('param', async (value, c) => {
	const validated = {}
	const instance_id = value.id?.trim()

	if (!instance_id) {
		c.trouble.add('id', 'Invalid item ID.')
	} else {
		const found = await queries.instance_with_details(c.sql, instance_id)

		if (!found) {
			c.trouble.add('id', 'Instance not found.')
		} else {
			validated.instance_id = instance_id
			validated.instance = found[0]
		}
	}

	return validated
})

async function instanceBodyValidator(value, c) {
	const validated = {}

	const book_id = value.book_id?.trim() ?? '-1'

	if (!(await queries.just_book_by_id(c.sql, book_id))) {
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
		const validStatusList = await queries.bookStatusList(c.sql)
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
			const statusList = await queries.bookStatusList(c.sql)

			const book_id = c.req.param('id') ?? null

			return c.render(`bookinstance_form.hbs`, {
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
			const validated = c.req.valid('form')
			const item = {
				book_id: validated.book_id,
				imprint: validated.imprint,
				status: validated.status,
				due_back: validated.due_back,
			}

			if (!c.trouble.isEmpty()) {
				const statusList = await queries.bookStatusList(c.sql)

				return c.render(
					`bookinstance_form.hbs`,
					{
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

			const [result] = await queries.create_instance(
				c.sql,
				item.book_id,
				item.imprint,
				item.status,
				item.due_back ?? c.sql`DEFAULT`
			)

			return c.redirect(result.book_instance_url)
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
				await queries.delete_instance(c.sql, instance_id)
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
			const statusList = await queries.bookStatusList(c.sql)

			return c.render(`bookinstance_form.hbs`, {
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

				const statusList = await queries.bookStatusList(c.sql)

				return c.render(
					`bookinstance_form.hbs`,
					{
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

			const [result] = await queries.update_instance(
				c.sql,
				instance_id,
				item.book_id,
				item.imprint,
				item.due_back ?? c.sql`DEFAULT`,
				item.status
			)

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

			const [itemList, total] = await queries.bookinstance_list(
				c.sql,
				limit,
				page
			)
			const position = paginate(page, limit, total)

			return c.render('bookinstance_list.hbs', {
				items: itemList,
				noResults: !itemList,
				...position,
			})
		},
	],
}
