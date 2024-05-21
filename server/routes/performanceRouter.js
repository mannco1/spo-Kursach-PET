const Router = require('express')
const router = new Router()
const performanceController = require('../controllers/performanceController')

router.post('/',performanceController.create)
router.get('/',performanceController.getAll)
router.get('/:id',performanceController.getOne)
router.put('/:id',performanceController.update)
router.delete('/:id',performanceController.delete)

module.exports = router

 