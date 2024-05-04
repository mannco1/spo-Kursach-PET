const Router = require('express')
const router = new Router()
const ensembleController = require('../controllers/ensembleController')

router.post('/',ensembleController.create)
router.get('/',ensembleController.getAll)
router.get('/:id',ensembleController.getOne)
router.put('/',ensembleController.update)
router.delete('/:id',ensembleController.delete)

module.exports = router