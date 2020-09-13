const router = require("express").Router()

router.use("/admin", require('./admin'))
router.use("/users", require('./users'))
router.use("/expenses", require('./expenses'))
router.use("/images", require('./images'))
router.use("/invoices", require('./invoices'))
router.use("/ingredients", require('./ingredients'))

module.exports = router
