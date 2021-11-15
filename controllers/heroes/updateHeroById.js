const { NotFound } = require('http-errors')
const Superhero = require('../../model')

const updateById = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const hero = await Superhero.findByIdAndUpdate(id, body, { new: true })

  if (!hero) {
    throw new NotFound('Not found')
  }

  res.status(200).json({
    message: 'Hero updated',
    hero,
  })
}

module.exports = updateById
