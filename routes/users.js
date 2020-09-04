const express = require("express")
const router = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

router.post('/register', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: 'Employee'
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

router.get('/profile', User.authenticate(), (req,res) => {
    res.json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        dateOfBirth: req.user.dateOfBirth,
        profilePicUrl: req.user.profilePicUrl,
        address: req.user.address,
        gender: req.user.gender,
        approved: req.user.approved
    })
})

router.get('/get-all-users', User.authenticate(), (req,res) => {
    User.getAllUsers((err, users) => {
        if (err) {
            res.send({success:false,msg:'Failed to retrieve users'})
        } else {
            res.send({success:true,users})
        }
    })
})

router.get('/get-user/:id', User.authenticate(), (req, res) => {
    User.getUserById(req.params.id, (err, user) => {
        if (err) {
            res.send({success:false,msg:'Failed to retrieve user'})
        } else {
            res.send({success:true,user})
        }
    })
})

router.patch('/approve-user/:_id', User.authenticate(), (req, res) => {
    if (req.user.role !== 'Manager' && req.user.role !== 'Admin') {
        res.send({success:false,msg:'You are not authorized to approve users'})
    } else {
        User.approveUser(req.params._id, (err, user) => {
            if (err) {
                res.send({success: false, msg: 'Failed to approve user'})
            } else {
                res.send({success: true, msg: `Account ${user.name} approved successfully`})
            }
        })
    }
})

router.patch('/update-job-title/:_id', User.authenticate(), (req, res) => {
    User.updateJobTitle(req.params._id, req.body.jobTitle, (err) => {
        if (err) {
            res.send({success: false, msg: 'Failed to update job title'})
        } else {
            res.send({success: true, msg: 'Job title edited successfully'})
        }
    })
})

module.exports = router
