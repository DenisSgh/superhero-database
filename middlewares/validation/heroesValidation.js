const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  nickname: Joi.string(),
  realName: Joi.string(),
  originDescription: Joi.string(),
  superpowers: Joi.string(),
  catchPhrase: Joi.string(),
  images: Joi.array(),
})

const heroesValidation = () => {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      throw new BadRequest('Missing fields')
    }
    next()
  }
}

module.exports = heroesValidation
