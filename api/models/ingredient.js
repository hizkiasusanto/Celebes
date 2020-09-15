const mongoose = require("mongoose")

const IngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    lastPurchased: {
        type: Object,
        default: null
    },
})

const Ingredient = module.exports = mongoose.model("Ingredients", IngredientSchema)

module.exports.addIngredient = (newIngredient, callback) => newIngredient.save(callback)

module.exports.getAllIngredients = (callback) => Ingredient.find({},callback)

module.exports.updateLastPurchased = (ingredientName, callback) => {
    let date = {year:new Date().getFullYear(),month:new Date().getMonth(),date:new Date().getDate()}
    Ingredient.findOneAndUpdate({name:ingredientName},{lastPurchased:date},{new:true},callback)
}

const Category = require('./ingredient_category')
module.exports.resolveCategory = ingredient => Category.findById(ingredient.category).then(category => {
    return {
        _id: ingredient._id,
        lastPurchased: ingredient.lastPurchased,
        name: ingredient.name,
        category: category.name,
        __v: ingredient.__v
    }
})
