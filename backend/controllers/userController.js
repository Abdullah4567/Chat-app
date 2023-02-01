const { validateSignUp, validateLogin } = require('../validators/validator')
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const hashPassword = require('../config/hashPassword');
const verifyPassword = require('../config/verifyPassword');
const cloudinary = require('../storage/cloudinary');
const registerUser = async (req, res, next) => {
    try {
        const { error, value } = validateSignUp(req.body);
        if (!error) {
            const { name, email, password } = req.body;
            console.log(req.file)
            const user = await User.findOne({ email });
            if (!user) {
                // hashing Password
                const pass = await hashPassword(password);

                // upload image to cloudinary
                const cloudinaryResponse = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: "ChatApp"
                });

                // console.log(cloudinaryResponse.secure_url)
                const newUser = await User.create({
                    email: email,
                    name: name,
                    password: pass,
                    picture: cloudinaryResponse.secure_url
                })
                const token = await generateToken(newUser.id);
                return res.status(200).json({
                    success: true,
                    date: {
                        token: token,
                        user: {
                            id: newUser.id,
                            name: newUser.name,
                            email: newUser.email,
                            picture: cloudinaryResponse.secure_url
                        }
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

const login = async (req, res, next) => {
    try {
        const { error, value } = validateLogin(req.body);
        if (!error) {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                const result = await verifyPassword(password, user.password);
                if (result) {

                    const token = await generateToken(user.id);
                    return res.status(200).json({
                        success: true,
                        date: {
                            token: token,
                            user: {
                                id: newUser.id,
                                name: newUser.name,
                                email: newUser.email,
                                picture: cloudinaryResponse.secure_url
                            }
                        }
                    })
                }
            }
            const err = new Error("Invalid Credentials");
            err.status = 400;
            throw err;

        }


    } catch (error) {
        next(error);
    }
}
module.exports = { registerUser, login }