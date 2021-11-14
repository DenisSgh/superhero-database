const { NotFound } = require('http-errors')
const { updateHero } = require('../../model/heroes')

const updateById = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const hero = await updateHero(id, body)

  if (!hero) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Hero updated',
    hero,
  })
}

module.exports = updateById
