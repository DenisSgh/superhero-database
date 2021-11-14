const Superhero = require('../../db')

const removeHero = async heroId => {
  return await Superhero.findByIdAndRemove(heroId)
}

module.exports = removeHero
