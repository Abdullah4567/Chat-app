
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// api/user/createuser  -- No Login Required
router.post('/createuser', registerUser)

module.exports = router
