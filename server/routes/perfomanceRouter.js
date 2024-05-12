const Router = require('express')
const router = new Router()
const perfomanceController = require('../controllers/perfomanceController')

router.post('/',perfomanceController.create)
router.get('/',perfomanceController.getAll)
router.get('/:id',perfomanceController.getOne)
router.put('/:id',perfomanceController.update)
router.delete('/:id',perfomanceController.delete)

module.exports = router