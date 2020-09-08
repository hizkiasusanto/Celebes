let JwtStrategy = require("passport-jwt").Strategy
let ExtractJwt = require("passport-jwt").ExtractJwt
let User = require("../models/user")

module.exports = (passport) => {
    let opts = {jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWT_SECRET}
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        User.getUserById(jwt_payload.user._id, (err, user) => {
            if(err) {
                return done(err, false)
            }
            if(user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
    }))

}

module.exports.authenticate = () => require('passport').authenticate('jwt', {session: false});