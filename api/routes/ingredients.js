const router = require('express').Router()
const Ingredient = require("../models/ingredient")
const Category = require("../models/ingredient_category")
const {authenticate} = require('../middlewares/authentication')

router.post('/add-ingredient', authenticate(), (req, res) => {
    Category.findOne({name: req.body.category}, (_, category) => {
        if (!category) {
            res.json({success: false, msg: `Category not found`})
        } else {
            let newIngredient = new Ingredient({
                name: req.body.name,
                category: category._id
            })
            Ingredient.addIngredient(newIngredient, (err, ingredient) => {
                if (err) {
                    res.json({success: false, msg: `Failed to add a new ingredient`})
                } else {
                    res.json({success: true, ingredient})
                }
            })
        }
    })
})

router.get('/get-all-ingredients', authenticate(), (req, res) => {
    Ingredient.getAllIngredients(async (err, ingredients) => {
        if (err) {
            res.json({success: false, msg: `Failed to retrieve ingredients`})
        } else {
            const resolvedIngredients = await Promise.all(ingredients.map(async i => await Ingredient.resolveCategory(i)))
            res.json({success: true, ingredients: resolvedIngredients})
        }
    })
})

router.post('/create-new-category', authenticate(), (req, res) => {
    Category.addCategory(req.body.name, (err, category) => {
        if (err) {
            res.json({success: false,
                msg: err.code === 11000 ? "Category already exists" : "Failed to add category"})
        } else {
            res.json({success: true, category})
        }
    })
})

router.get('/get-all-categories', authenticate(), (req, res) => {
    Category.getAllCategories((err, categories) => {
        if (err) {
            res.json({success: false, msg: "Failed to retrieve categories"})
        } else {
            res.json({success: true, categories})
        }
    })
})

module.exports = router