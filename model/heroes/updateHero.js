const Superhero = require('../../db')

const updateHero = async (contactId, body) => {
  return await Superhero.findByIdAndUpdate(contactId, body, { new: true })
}

module.exports = updateHero
