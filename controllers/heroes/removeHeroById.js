const { NotFound } = require('http-errors')
const Superhero = require('../../model')

const removeById = async (req, res) => {
  const { id } = req.params
  const hero = await Superhero.findByIdAndRemove(id)

  if (!hero) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Hero deleted',
  })
}

module.exports = removeById
