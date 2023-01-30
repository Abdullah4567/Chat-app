const { validateSignUp } = require('../validators/validator')
const registerUser = (req, res) => {
    const { error, value } = validateSignUp(req.body);
    if (!error) {

        return (res.status(200).json({
            success: true,
            message: "User created successfully"
        }))
    }
}
module.exports = { registerUser }