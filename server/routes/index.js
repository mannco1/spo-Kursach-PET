const Router = require('express')
const router = new Router()
const companyRouter = require('./companyRouter')
const compositionsRouter = require('./perfomanceRouter')
const musiciansRouter = require('./musiciansRouter')
const plateRouter = require('./plateRouter')
const ensembleRouter = require('./ensembleRouter')
const perfomanceRouter = require('./perfomanceRouter')
const plateRouter = require('./plateRouter')
const matrixRouter = require('./matrixRouter')
const leaderRouter = require('./leader')


router.use('/company',companyRouter)
router.use('/leader',leaderRouter)
router.use('/musicians',musiciansRouter)
router.use('/ensemble',ensembleRouter)
router.use('/matrix',perfomanceRouter)
router.use('/plate',plateRouter)
router.use('/perfomance',matrixRouter)


module.exports = router