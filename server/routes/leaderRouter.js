const Router = require('express')
const router = new Router()
const leaderController = require('../controllers/leaderController')

router.post('/',leaderController.create)
router.get('/',leaderController.getAll)
router.get('/:id',leaderController.getOne)
router.put('/:id',leaderController.update)
router.delete('/:id',leaderController.delete)

module.exports = router