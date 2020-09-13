const router = require('express').Router()
const Ingredient = require("../models/ingredient")
const {authenticate} = require('../middlewares/authentication')

router.post('/add-ingredient', authenticate(), (req, res) => {
    let newIngredient = new Ingredient({
        name: req.body.name,
        category: req.body.category
    })
    Ingredient.addIngredient(newIngredient, (err, ingredient) => {
        if (err) {
            res.json({success:false, msg: `Failed to add a new ingredient`})
        } else {
            res.json({success:true,ingredient})
        }
    })
})

router.get('/get-all-ingredients', authenticate(), (req,res) => {
    Ingredient.getAllIngredients((err, ingredients) => {
        if (err) {
            res.json({success:false, msg:`Failed to retrieve ingredients`})
        } else {
            res.json({success:true, ingredients})
        }
    })
})

module.exports = router