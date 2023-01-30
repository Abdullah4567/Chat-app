// Page not Found Error
const notFound = (req, res, next) => {
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
}

// Default Error Handler
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    })
}

module.exports = { errorHandler, notFound };