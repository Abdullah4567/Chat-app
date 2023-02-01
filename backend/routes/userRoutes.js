
const express = require('express');
const router = express.Router();
const { registerUser, login } = require('../controllers/userController');
const uploadPicture = require('../middlewares/multerMiddleware')

//  /api/user/createuser  -- No Login Required
router.post('/createuser', uploadPicture, registerUser)

//  /api/user/login --  No Login Required
router.post('/login', login)

module.exports = router
