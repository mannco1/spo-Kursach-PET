const Router = require('express')
const router = new Router()
const compositionController = require('../controllers/сompositionController')

router.post('/',compositionController.create)
router.get('/',compositionController.getAll)
router.get('/:id',compositionController.getOne)
router.put('/',compositionController.update)
router.delete('/:id',compositionController.delete)

module.exports = router