const router = require('express').Router()
const Invoice = require('../models/invoice')
const multer = require('multer')

router.post('/upload-invoice', multer({storage: multer.memoryStorage()}).single('invoice'), (req, res, next) => {
    if (req.file.mimetype.match(/image\/*/) !== null) {
        Invoice.addInvoice((err, invoice) => {
            if (!err) {
                res.locals.invoice = invoice
            }
            next()
        })
    } else {
        next()
    }
}, (req, res, next) => {
    let invoiceId = res.locals.invoice?._id;
    let fileExtension = req.file.originalname.split('.').pop()
    if (invoiceId) {
        require('fs').writeFile(`uploads/invoices/${invoiceId}.${fileExtension}`, req.file.buffer, err => {
            if (!err) {
                res.locals.imageUrl = `${invoiceId}.${fileExtension}`
            }
            next()
        })
    } else {
        next()
    }
}, (req, res) => {
    Invoice.updateImageUrl(res.locals.invoice?._id, res.locals.imageUrl, (err, invoice) => {
        if (err) {
            res.send({success: false, msg: 'Failed to upload invoice'})
        } else if (!invoice) {
            res.send({success: false, msg: 'File type unrecognized'})
        } else {
            res.send({success: true, invoice})
        }
    })
})

module.exports = router
