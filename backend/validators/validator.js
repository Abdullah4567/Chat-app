const joi = require('joi');
const SignUpSchema = joi.object({
    name: joi.string().required().min(3).max(20),
    email: joi.string().email().required(),
    password: joi.string().required().min(3).max(20)

})
const validateSignUp = (requestBody) => {
    const { error, value } = SignUpSchema.validate(requestBody, {
        abortEarly: false
    });
    if (error) {
        // console.log(error.details)
        const errorDetails = []
        error.details.forEach((elem) => {
            // console.log(elem.message)
            errorDetails.push(elem.message)
        })
        const err = new Error(errorDetails);
        err.status = 400;
        throw err;
    }
    return { error, value }

}

const LoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(3).max(20)
})

const validateLogin = (requestBody) => {

    const { error, value } = LoginSchema.validate(requestBody, {
        abortEarly: false
    });
    if (error) {
        console.log(error.details)
        const errorDetails = []
        error.details.forEach((elem) => {
            // console.log(elem.message)
            errorDetails.push(elem.message)
        })
        const err = new Error(errorDetails);
        err.status = 400;
        throw err;
    }
    return { error, value }

}

module.exports = {
    validateSignUp,
    validateLogin
}