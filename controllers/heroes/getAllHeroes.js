const Superhero = require('../../model')

const getAll = async (req, res) => {
  const { page = 1, limit = 5 } = req.query
  const heroes = await Superhero.paginate(Superhero.find(), { page, limit })

  res.status(200).json({
    message: 'All heroes in heroes list',
    heroes,
  })
}

module.exports = getAll
