const { baseUrl } = require('../config/config')
const errorHandler = (req, res, next) => {
    console.log(req);
    return (res.status(404).json({
        success: false,
        message: `No Page found at ${baseUrl + req.originalUrl}`
    }))
}
module.exports = errorHandler