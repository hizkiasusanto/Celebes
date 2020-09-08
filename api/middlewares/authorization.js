module.exports.permit = (...permittedRoles) => {
    return (request, response, next) => {
        const { user } = request

        if (user && permittedRoles.includes(user.role)) {
            next();
        } else {
            response.status(403).json({success:false,msg:'You are not authorized to approve users'}); // user is forbidden
        }
    }
}