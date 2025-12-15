import { validator } from 'hono/validator'
import { withPagination } from '../validation/hono-pagination'
const { paginate } = require('./paginator.js')
const { authors, snipTimes, trigramAuthorQuery } = require('../database.js')

async function authorBodyValidation(value, c) {
	const validated = {}

	console.log('<author validation placeholder>')

	return validated
}

const authorJsonValidator = validator('json', authorBodyValidation)

export const authorController = {
	author_list: [
		withPagination,
		async (c) => {
			const { page, limit } = c.req.valid('query')
			const search = c.req.query('q') || null

			if (search) {
				const matches = await trigramAuthorQuery(c.client, search)

				return c.render('author_list.hbs', {
					authors: matches,
					noResults: !Boolean(matches.length),
					total: matches.length,
					allResults: true,
					populate: { search },
				})
			}

			const [authorList, total] = await Promise.all([
				snipTimes(
					authors.find(
						c.client,
						'full_name',
						'dob',
						'dod',
						'author_url',
						'blurb',
						{
							page,
							limit,
						}
					)
				),

				authors.count(c.client),
			])

			const position = paginate(page, limit, total)

			return c.render(`author_list.hbs`, {
				authors: authorList,
				noResults: !authorList,
				...position,
			})
		},
	],

	author_json_post: [
		authorJsonValidator,
		async (c) => {
			return c.json({ placeholder: 'author stuff' }, { status: 418 })
		},
	],
}

const EXAMPLE_author_json_post = [
	// ...authorValidators,
	// authorNameValidator,
	async (req, res) => {
		let result
		const trouble = validationResult(req)

		if (!trouble.isEmpty()) {
			return res.status(400).send({
				trouble: trouble.array(),
			})
		}

		try {
			result = await authors.insert({
				first_name: req.body.first_name,
				last_name: req.body.last_name || null,
				dob: req.body.dob || null,
				dod: req.body.dod || null,
				bio: req.body.bio || null,
			})
		} catch (e) {
			log.err(e.message)
			throw e
		}

		res.status(201).send(result[0])
	},
]
