const Router = require('express')
const router = new Router()
const companyRouter = require('./companyRouter')
const compositionsRouter = require('./compositionsRouter')
const musiciansRouter = require('./musiciansRouter')
const recordRouter = require('./recordRouter')
const ensembleRouter = require('./ensembleRouter')

router.use('/company',companyRouter)
router.use('/compositions',compositionsRouter)
router.use('/musicians',musiciansRouter)
router.use('/record',recordRouter)
router.use('/ensemble',ensembleRouter)


module.exports = router