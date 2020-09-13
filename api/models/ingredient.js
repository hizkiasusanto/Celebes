const mongoose = require("mongoose")

const IngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
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
