const { NotFound } = require('http-errors')
const Superhero = require('../../model')

const getById = async (req, res) => {
  const { id } = req.params

  const hero = await Superhero.findById(id)

  if (!hero) {
    throw new NotFound('Not found')
  }

  res.status(200).json(hero)
}

module.exports = getById
