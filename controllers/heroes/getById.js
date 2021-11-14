const { NotFound } = require('http-errors')
const { getHeroById } = require('../../model/heroes')

const getById = async (req, res) => {
  const { id } = req.params

  const heroes = await getHeroById(id)

  if (!heroes) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Your hero find',
    heroes,
  })
}

module.exports = getById
