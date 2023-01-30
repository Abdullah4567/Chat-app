
const registerUser = (req, res) => {
    return (res.status(200).json({
        success: true,
        message: "User created successfully"
    }))
}
module.exports = { registerUser }