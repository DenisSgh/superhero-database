const Superhero = require('../../db')

const addHero = async ({
  nickname,
  realName,
  originDescription,
  superpowers,
  catchPhrase,
  images,
}) => {
  return await Superhero.create({
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    images,
  })
}

module.exports = addHero
