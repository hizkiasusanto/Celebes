const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

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
        enum: ['Admin', 'Manager', 'Employee'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    profilePicUrl: {
        type: String,
        default: null
    },
    jobTitle: {
        type: String,
        default: null
    },
    approved: {
        type: Boolean,
        default: false
    }
})

const User = module.exports = mongoose.model("User", UserSchema)

module.exports.getAllUsers = (callback) => User.find({}, callback)

module.exports.getUserById = (id, callback) => User.findById(id, callback)

module.exports.approveUser = (id, callback) =>
    User.findByIdAndUpdate(id, {approved: true}, callback)

module.exports.updateJobTitle = (id, newJobTitle, callback) =>
    User.findByIdAndUpdate(id, {jobTitle: newJobTitle}, callback)

module.exports.editProfile = (id, newData, callback) => {
    User.findByIdAndUpdate(id, {
        jobTitle: newData.jobTitle,
        dateOfBirth: newData.dateOfBirth,
        address: newData.address
    }, {new : true}, callback)
}

module.exports.getUserByEmail = (email, callback) => User.findOne({email: email}, callback)

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
    bcrypt.compare(passwordInput, hash, (err, isMatch) => {
        if (err) throw err
        callback(null, isMatch)
    })
}

module.exports.authenticate = () => require('passport').authenticate('jwt', {session: false});
