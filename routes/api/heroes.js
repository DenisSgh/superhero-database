const express = require('express')

const router = express.Router()
const {
  getAll,
  add,
  updateById,
  removeById,
} = require('../../controllers/heroes')
const { controllerWrapper, avatarsMiddleware } = require('../../middlewares')
const {
  heroesValidation,
  heroUpdateValidation,
} = require('../../middlewares/validation')

router.get('/', controllerWrapper(getAll))

router.post(
  '/',
  heroesValidation(),
  avatarsMiddleware.array('images'),
  controllerWrapper(add),
)

router.put('/:id', heroUpdateValidation(), controllerWrapper(updateById))

router.delete('/:id', controllerWrapper(removeById))

module.exports = router
