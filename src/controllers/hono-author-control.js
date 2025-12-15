import { validator } from "hono/validator"

async function authorBodyValidation(value, c) {
  const validated = {}

  console.log('<author validation placeholder>')

  return validated
}

const authorJsonValidator = validator('json', authorBodyValidation)

export const authorController = {
  author_json_post: [
    authorJsonValidator,
    async (c) => {
      return c.json({placeholder: "author stuff"}, {status: 418})
    }
  ]
  
}

const author_json_post = [
    // ...authorValidators,
    // authorNameValidator,
    async (req, res) => {
        let result
        const trouble = validationResult(req)

        if (!trouble.isEmpty()) {
            return res.status(400).send({
                trouble: trouble.array()
            })
        }

        try {
            result = await authors.insert({
                first_name: req.body.first_name,
                last_name: req.body.last_name || null,
                dob: req.body.dob || null,
                dod: req.body.dod || null,
                bio: req.body.bio || null
            })
        } catch (e) {
            log.err(e.message)
            throw e
        }

        res.status(201).send(result[0])
    }
]