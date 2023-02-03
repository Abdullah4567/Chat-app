
const express = require('express');
const router = express.Router();
const { registerUser, login, getAllUsers } = require('../controllers/userController');
const uploadPicture = require('../middlewares/multerMiddleware');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

//  /api/user/createuser  -- No Login Required
router.post('/createuser', uploadPicture, registerUser)

//  /api/user/login --  No Login Required
router.post('/login', login)

router.get('/', verifyToken, getAllUsers)

module.exports = router
