const mongoose = require("mongoose")

const InvoiceSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        default: null
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const Invoice = module.exports = mongoose.model("Invoice", InvoiceSchema)

module.exports.addInvoice = (callback) => new Invoice().save(callback)

module.exports.updateImageUrl = (_id, newUrl, callback) => Invoice.findByIdAndUpdate(_id, {imageUrl: newUrl}, {new: true}, callback)

module.exports.getInvoiceById = (_id, callback) => Invoice.findOne({_id}, callback);
