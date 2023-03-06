const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/config')

const generateToken = (id) => {
    return jwt.sign({ id }, secretKey);
    // return jwt.sign({ id }, secretKey, { expiresIn: '1d' });
}
module.exports = generateToken;