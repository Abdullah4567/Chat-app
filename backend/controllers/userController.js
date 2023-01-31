const { validateSignUp } = require('../validators/validator')
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const hashPassword = require('../config/hashPassword');
const registerUser = async (req, res) => {
    const { error, value } = validateSignUp(req.body);
    res.status(200).json({
        success: true
    })
    // if (!error) {

    //     // const err = new Error('Email Already Exists');
    //     // err.status = 500;
    //     // throw err;

    //     const { name, email, password } = req.body;
    //     const user = await User.findOne({ email });
    //     if (!user) {
    //         const pass = await hashPassword(password);
    //         const newUser = await User.create({
    //             email: email,
    //             name: name,
    //             password: pass
    //         })
    //         const token = await generateToken(newUser.id);
    //         return res.status(201).json({
    //             success: true,
    //             token: token,
    //             user: {
    //                 id: newUser.id,
    //                 name: newUser.name,
    //                 email: newUser.email
    //             }
    //         })
    //     }
    //     else {

    //         // return res.status(400).json({
    //         //     success: false,
    //         //     message: 'Email already exists'
    //         // })
    //     }
    // }
}
module.exports = { registerUser }