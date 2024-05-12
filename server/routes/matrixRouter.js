const Router = require('express')
const router = new Router()
const matrixController = require('../controllers/matrixController')

router.post('/',matrixController.create)
router.get('/',matrixController.getAll)
router.get('/:id',matrixController.getOne)
router.put('/:id',matrixController.update)
router.delete('/:id',matrixController.delete)

module.exports = router