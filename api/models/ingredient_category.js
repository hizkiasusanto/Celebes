const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
})

const Category = module.exports = mongoose.model("Categories",CategorySchema)

module.exports.addCategory = (newCategoryName, callback) => {
    let newCategory = new Category()
    newCategory.name = newCategoryName
    newCategory.save(callback)
}

module.exports.getAllCategories = (callback) => Category.find({}, callback)

module.exports.getCategoryById = (id, callback) => Category.findById(id,callback)
