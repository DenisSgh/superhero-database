const Superhero = require('../../db')

const getHeroById = async contactId => {
  return await Superhero.findById(contactId)
}

module.exports = getHeroById
