const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config')
const User = require('../models/userModel')
const verifyToken = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            const token = req.headers.authorization.split(" ")[1];

            console.log(token);
            // verify Jwt Token
            const decoded = jwt.verify(token, secretKey);
            const user = await User.findOne({ id: decoded.id })
            if (user) {
                req.user = user;
                next();
            }
            else {
                const err = new Error('Invalid Token');
                err.status = 401;
                throw err;
            }
        }
        else {
            const err = new Error('Invalid Format of Authorization Token');
            err.status = 400;
            throw err
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports = verifyToken;