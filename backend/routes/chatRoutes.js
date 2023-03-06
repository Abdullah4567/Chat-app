const express = require('express');
const { getChat, getAllChats, createGroup, renameGroup, addToGroup, removeFromGroup, deleteChat } = require('../controllers/chatController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');
const router = express.Router();

//  /api/chats/  -- Login Required  
router.post('/', verifyToken, getChat)

//  /api/chats/  -- Login Required
router.get('/', verifyToken, getAllChats)

//  /api/chats/group  -- Login Required
router.post('/group', verifyToken, createGroup)

//  /api/chats/rename  -- Login Required
router.put('/rename', verifyToken, renameGroup)

//  /api/chats/add-group  -- Login Required
router.put('/add-group', verifyToken, addToGroup)

//  /api/chats/remove-group  -- Login Required
router.put('/remove-group', verifyToken, removeFromGroup)

// / api / chats / --Login Required
router.delete('/', verifyToken, deleteChat)









module.exports = router