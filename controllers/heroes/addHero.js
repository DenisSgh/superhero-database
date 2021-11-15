const cloudinary = require('cloudinary').v2
const Superhero = require('../../model')

const add = async (req, res) => {
  const body = req.body
  const files = req.files
  console.log(body)

  if (files.length !== 0) {
    try {
      const cloudinaryImg = async image => {
        const result = await cloudinary.uploader.upload(`./temp/${image}`, {
          resource_type: 'image',
        })
        return result.secure_url
      }

      const uploadToCloudinary = arr => {
        const promises = arr.map(el => cloudinaryImg(el.originalname))
        return Promise.all(promises)
      }

      body.images = await uploadToCloudinary(files)
    } catch (error) {
      console.log(error)
    }
  }

  const hero = await Superhero.create(body)

  res.status(201).json({
    message: 'Hero created',
    hero,
  })
}

module.exports = add
