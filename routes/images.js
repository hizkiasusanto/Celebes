const express = require("express")
const router = express.Router()
const User = require("../models/user")
const multer = require('multer')

const {promisify} = require('util')
const unlinkAsync = promisify(require('fs').unlink)

const dateFormat = "yyyymmdd_HHMMss"

const storage = (subfolder) => multer.diskStorage({
    destination: (req, file, callback) => callback(null, `uploads/${subfolder}`),
    filename: (req, file, callback) => {
        let userId = req.user._id
        let fileExtension = file.originalname.split('.').pop()
        callback(null, `${require('dateformat')(new Date(), dateFormat)}_${userId}.${fileExtension}`)
    }
})

const upload = (subfolder) => multer({
    storage: storage(subfolder), limits: {
        fileSize: 1024 * 1024
    }, fileFilter: (req, file, callback) => {
        if (file.mimetype.match(/image\/*/) === null) {
            callback(new Error('File type not recognized'), false)
        } else {
            callback(null, true)
        }
    }
})

router.post('/upload-profile-picture', User.authenticate(),
    upload(`profile-pictures/`).single('profilePicture'),
    (req, res) => {
    User.getUserById(req.user._id, (err, user) => {
        if (err) {
            res.send({success: true, msg: 'Failed to update profile picture'})
        } else {
            unlinkAsync(`uploads/profile-pictures/${user.profilePicUrl}`).then(() => {
                User.editProfilePicture(user._id, req.file.filename, (err, user) => {
                    if (err) {
                        res.send({success: false, msg: 'Failed to update profile picture'})
                    } else {
                        res.send({success: true, user})
                    }
                })
            })
        }
    })

    })

module.exports = router