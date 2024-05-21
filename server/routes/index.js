const Router = require('express')
const router = new Router()
const companyRouter = require('./companyRouter')
const musiciansRouter = require('./musiciansRouter')
const plateRouter = require('./plateRouter')
const ensembleRouter = require('./ensembleRouter')
const performanceRouter = require('./performanceRouter')
const matrixRouter = require('./matrixRouter')
const leaderRouter = require('./leaderRouter')

router.use('/leader',leaderRouter)
router.use('/company',companyRouter)
router.use('/musicians',musiciansRouter)
router.use('/ensemble',ensembleRouter)
router.use('/performance', performanceRouter)
router.use('/plate',plateRouter) 
router.use('/matrix',matrixRouter)

 
module.exports = router