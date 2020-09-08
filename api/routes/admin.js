const router = require('express').Router()
const User = require('../models/user')
const {authenticate} = require('../middlewares/authentication')
const {permit} = require('../middlewares/authorization')

router.get('/get-all-users', authenticate(), permit('Admin','Manager'), (req,res) => {
    User.getAllUsers((err, users) => {
        if (err) {
            res.send({success:false,msg:'Failed to retrieve users'})
        } else {
            res.send({success:true,users})
        }
    })
})

router.get('/get-user/:id', authenticate(), permit('Admin','Manager'), (req, res) => {
    User.getUserById(req.params.id, (err, user) => {
        if (err) {
            res.send({success:false,msg:'Failed to retrieve user'})
        } else {
            res.send({success:true,user})
        }
    })
})

router.patch('/approve-user/:_id', authenticate(), permit('Admin','Manager'), (req, res) => {
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

router.patch('/update-job-title/:_id', authenticate(), permit('Admin','Manager'), (req, res) => {
    User.updateJobTitle(req.params._id, req.body.jobTitle, (err) => {
        if (err) {
            res.send({success: false, msg: 'Failed to update job title'})
        } else {
            res.send({success: true, msg: 'Job title edited successfully'})
        }
    })
})

module.exports = router
