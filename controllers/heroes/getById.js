const { NotFound } = require('http-errors')
const { getHeroById } = require('../../model/heroes')

const getById = async (req, res) => {
  const { id } = req.params

  const hero = await getHeroById(id)

  if (!hero) {
    throw new NotFound('Not found')
  }

  res.status(200).json(hero)
}

module.exports = getById
