const Router = require('express')
const router = new Router()
const plateController = require('../controllers/plateController')

router.post('/',plateController.create)
router.get('/',plateController.getAll)
router.get('/:id',plateController.getOne)
router.put('/:id',plateController.update)
router.delete('/:id',plateController.delete)

module.exports = router