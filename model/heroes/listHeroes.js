const Superhero = require('../../db')

const listHeroes = async (page, limit) => {
  return await Superhero.paginate(Superhero.find(), { page, limit })
}

module.exports = listHeroes
