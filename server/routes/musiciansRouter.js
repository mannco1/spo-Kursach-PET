const Router = require('express')
const router = new Router()
const musiciansController = require('../controllers/musiciansController')

router.post('/',musiciansController.create)
router.get('/',musiciansController.getAll)
router.get('/:id',musiciansController.getOne)
router.put('/',musiciansController.update)
router.delete('/:id',musiciansController.delete)

module.exports = router