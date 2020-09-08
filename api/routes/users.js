const express = require("express")
const router = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const {authenticate} = require('../middlewares/authentication')

router.post('/register', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: 'Employee',
        jobTitle: 'Employee'
    })

    User.addUser(newUser, (err) => {
        if(err) {
            res.json({success: false,  msg: `Failed to register user`})
        } else {
            res.json({success: true, msg: `User registered`})
        }
    })
})

router.post('/authenticate', (req,res) => {
    const email = req.body.email
    const password = req.body.password

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err
        if(!user){
            return res.json({success:false,msg:`User not found`})
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err
            if(!isMatch) {
                return res.json({success:false,msg:`Incorrect password`})
            }
            const token = jwt.sign({user}, process.env.JWT_SECRET, {
                expiresIn: 604800 // 1 week
            })

            res.json({
                success:true,
                token:`Bearer ${token}`,
                user: user
            })
        })
    })
})

router.get('/profile', authenticate(), (req,res) => {
    res.json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        jobTitle: req.user.jobTitle,
        dateOfBirth: req.user.dateOfBirth,
        profilePicUrl: req.user.profilePicUrl,
        address: req.user.address,
        approved: req.user.approved
    })
})

router.patch('/edit-profile/:_id', authenticate(), (req, res) => {
    User.editProfile(req.params._id, req.body.newData, (err, user) => {
        if (err) {
            res.send({success: false, msg: 'Failed to edit profile'})
        } else {
            res.send({success: true, user})
        }
    })
})

module.exports = router
