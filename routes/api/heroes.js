const express = require('express')

const router = express.Router()
const {
  getAllHeroes,
  getHeroById,
  addHero,
  updateHeroById,
  removeHeroById,
} = require('../../controllers/heroes')
const { controllerWrapper, avatarsMiddleware } = require('../../middlewares')
const {
  heroesValidation,
  heroUpdateValidation,
} = require('../../middlewares/validation')

router.get('/', controllerWrapper(getAllHeroes))

router.get('/:id', controllerWrapper(getHeroById))

router.post(
  '/',
  heroesValidation(),
  avatarsMiddleware.array('images'),
  controllerWrapper(addHero),
)

router.put('/:id', heroUpdateValidation(), controllerWrapper(updateHeroById))

router.delete('/:id', controllerWrapper(removeHeroById))

module.exports = router
