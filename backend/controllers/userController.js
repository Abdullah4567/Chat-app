const { validateSignUp } = require('../validators/validator')
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const hashPassword = require('../config/hashPassword');
const registerUser = async (req, res, next) => {
    try {
        const { error, value } = validateSignUp(req.body);
        if (!error) {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                const pass = await hashPassword(password);
                const newUser = await User.create({
                    email: email,
                    name: name,
                    password: pass
                })
                const token = await generateToken(newUser.id);
                return res.status(201).json({
                    success: true,
                    token: token,
                    user: {
                        id: newUser.id,
                        name: newUser.name,
                        email: newUser.email
                    }
                })
            }
            else {
                const err = new Error("Email already Taken");
                err.status = 400;
                throw err;
            }
        }
    } catch (error) {
        // console.log(error);
        next(error);
    }
}
module.exports = { registerUser }