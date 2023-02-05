const express = require('express');
const verifyToken = require('../middlewares/verifyTokenMiddleware');
const router = express.Router();


//  /api/chat/  -- Login Required
// router.get('/', verifyToken, getAllChats)

//  /api/chat/  -- Login Required
// router.post('/', verifyToken, createChat)

//  /api/chat/group  -- Login Required
// router.post('/group', verifyToken, createGroup)

//  /api/chat/ -- Login Required
// router.delete('/', verifyToken,deleteGroup)

//  /api/chat/rename  -- Login Required
// router.put('/rename', verifyToken, renameGroup)

//  /api/chat/remove-group  -- Login Required
// router.put('/remove-group', verifyToken, removeFromGroup)

//  /api/chat/add-group  -- Login Required
// router.put('/add-group', verifyToken, addToGroup)




module.exports = router