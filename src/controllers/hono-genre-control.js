const {
  genres
  } = require('../database.js')

export const genreController = {
  async genre_json_get(c) {
    const result = await genres.find(c.client)
    return c.json(result || [])
  }
}