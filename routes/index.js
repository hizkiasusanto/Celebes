const router = require("express").Router()

router.use("/users", require('./users'))
router.use("/expenses", require('./expenses'))

module.exports = router
