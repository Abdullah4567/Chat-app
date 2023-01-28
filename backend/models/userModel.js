const mongoose = require('mongoose');
const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            default: "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000"
        }
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userModel);
module.exports = User;