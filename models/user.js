const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const config = require('../config/database')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin','Manager','Employee'],
        required: true
    }
})

const User = module.exports = mongoose.model("User",UserSchema)

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback)
}

module.exports.getUserByEmail = (email, callback) => {
    User.findOne({email: email}, callback)
}

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save(callback)
        })
    });
}

module.exports.comparePassword = (passwordInput, hash, callback) => {
    bcrypt.compare(passwordInput,hash, (err, isMatch) => {
        if(err) throw err
        callback(null, isMatch)
    })
}
