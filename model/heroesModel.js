const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const heroesSchema = Schema(
  {
    nickname: {
      type: String,
      required: [true, 'Set name for superhero'],
    },
    realName: {
      type: String,
    },
    originDescription: {
      type: String,
    },
    superpowers: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
    images: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true },
)

heroesSchema.plugin(mongoosePaginate)

const Superhero = model('superhero', heroesSchema)

module.exports = Superhero
