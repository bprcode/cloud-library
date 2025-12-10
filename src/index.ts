import { httpServerHandler } from 'cloudflare:node'
import express from "express"
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.json({message: 'Howdy'})
})

app.listen(3000)
export default httpServerHandler({port: 3000})
