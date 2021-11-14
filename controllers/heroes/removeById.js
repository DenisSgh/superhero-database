const { NotFound } = require('http-errors')
const { removeHero } = require('../../model/heroes')

const removeById = async (req, res) => {
  const { id } = req.params
  const hero = await removeHero(id)

  if (!hero) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Hero deleted',
  })
}

module.exports = removeById
