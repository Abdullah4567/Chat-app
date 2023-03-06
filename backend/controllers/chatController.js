const Chat = require('../models/chatModel');
const User = require('../models/userModel');
const getChat = async (req, res, next) => {
    try {
        const { userId } = req.body;
        if (userId) {
            let chat = await Chat.findOne({
                isGroupChat: false,
                $and: [
                    { users: { $elemMatch: { $eq: req.user.id } } },
                    { users: { $elemMatch: { $eq: userId } } }
                ]
            }).populate('users', '-password').populate('latestMessage');
            console.log("Before populating", chat);
            chat = await Chat.populate(chat, {
                path: "latestMessage.sender",
                select: "name email picture"
            });
            // console.log("After populating", chat);
            // console.log(chat);
            if (!chat) {
                const createdChat = await Chat.create({
                    isGroupChat: false,
                    chatName: "sender",
                    users: [userId, req.user.id]
                });
                const chatToReturn = await Chat.findOne({
                    _id: createdChat._id
                }).populate("users", "-password");
                res.status(200).json(chatToReturn);
            }
            else {
                res.status(200).json({
                    sucess: true,
                    chat
                });
            }
        }
        else {
            const err = new Error(" User Id not Found ");
            err.status = 400;
            throw err;
        }


    } catch (error) {
        next(error);
    }
}
const getAllChats = async (req, res, next) => {
    try {
        let chats = await Chat.find(
            {
                users: {
                    $elemMatch: {
                        $eq: { _id: req.user.id }
                    }
                }
            }).populate('users', '-password').populate('groupAdmin', '-password')
            .populate('latestMessage');
        console.log("Hello here I am ");
        chats = await User.populate(chats, {
            path: 'latestMessage.sender',
            select: "name email pic"
        })
        console.log(chats);
        res.status(200).json({
            success: true,
            chats
        });


    } catch (error) {
        next(error);
    }
}

const createGroup = async (req, res, next) => {

    const err = new Error("");
    try {
        const { name, users } = req.body;
        if (name && users) {

            // parsing users array 
            const groupMembers = JSON.parse(users);

            // pusing group admin into array
            groupMembers.push(req.user.id);


            if (users.length > 2) {
                let newGroup = await Chat.create({
                    chatName: name,
                    isGroupChat: true,
                    users: groupMembers,
                    groupAdmin: req.user.id,
                })

                // populating Group Admin
                newGroup = await Chat.populate(newGroup, {
                    path: 'groupAdmin',
                    select: 'name email picture'
                });

                //populating Group Members
                newGroup = await Chat.populate(newGroup, {
                    path: 'users',
                    select: 'name email picture'
                });
                res.status(200).json({
                    success: true,
                    newGroup
                })

            }
            else {
                err.message = "Group must contain at least two users"
                err.status = 400;
                throw err;
            }

        }
        else {
            err.message = "Group Name or List of Members not Found"
            err.status = 400;
            throw err;
        }
    } catch (error) {
        next(error)

    }
}

const renameGroup = async (req, res, next) => {

    try {
        const err = new Error("");
        const { chatId, chatName } = req.body;
        if (chatId && chatName) {

            let updateChat = await Chat.findByIdAndUpdate(chatId, {
                chatName
            }, {
                new: true
            });

            if (!updateChat) {
                return res.status(400).json({
                    success: false,
                    message: "Chat not Found"
                });
            }
            // populating Users of Chat
            updateChat = await User.populate(updateChat, {
                path: "users",
                select: "name email picture"
            })

            // populating Admin of Chat
            updateChat = await User.populate(updateChat, {
                path: "groupAdmin",
                select: "name email picture"
            })


            res.status(200).json({
                success: true,
                updateChat
            });

        }
        else {
            err.message = "Please Give Valid chatId and chatName";
            err.status = 400;
            throw err;

        }

    } catch (error) {
        next(error)
    }
}

const addToGroup = async (req, res, next) => {
    try {
        const err = new Error("");
        const { chatId, userId } = req.body
        if (chatId && userId) {

            let updatedChat = await Chat.findByIdAndUpdate(chatId, {
                $addToSet: {
                    users: { $each: [userId] }
                }
            }, {
                new: true
            })
            // chat not exist
            if (!updatedChat) {
                return res.status(400).json({
                    success: false,
                    message: "Chat not Found"
                });
            }
            // populating Users of Group Chat
            updatedChat = await User.populate(updatedChat, {
                path: "users",
                select: "name email picture"
            })

            // populating Admin of Group Chat
            updatedChat = await User.populate(updatedChat, {
                path: "groupAdmin",
                select: "name email picture"
            })

            res.status(200).json({
                success: true,
                updatedChat
            })
        }
        else {
            err.status = 400;
            err.message = "Please give valid chatId and userId";
            throw err;

        }
    } catch (error) {
        next(error)
    }
}

const removeFromGroup = async (req, res, next) => {
    try {
        const err = new Error("");
        const { chatId, userId } = req.body
        if (chatId && userId) {

            let updatedChat = await Chat.findByIdAndUpdate(chatId, {
                $pull: { users: userId }
            }, {
                new: true
            })
            // chat not exist
            if (!updatedChat) {
                return res.status(400).json({
                    success: false,
                    message: "Chat not Found"
                });
            }
            // populating Users of Group Chat
            updatedChat = await User.populate(updatedChat, {
                path: "users",
                select: "name email picture"
            })

            // populating Admin of Group Chat
            updatedChat = await User.populate(updatedChat, {
                path: "groupAdmin",
                select: "name email picture"
            })

            res.status(200).json({
                success: true,
                updatedChat
            })
        }
        else {
            err.status = 400;
            err.message = "Please give valid chatId and userId";
            throw err;

        }
    } catch (error) {
        next(error)
    }
}

const deleteChat = async (req, res, next) => {
    try {
        const { chatId } = req.body;
        if (chatId) {
            let result = await Chat.findByIdAndDelete(chatId);
            res.status(200).json({
                success: true,
                result
            });

        } else {
            const err = new Error("No Chat Found");
            err.status = 400;
            throw err;
        }


    } catch (error) {
        next(error);
    }
}
module.exports = {
    getChat, getAllChats, createGroup, renameGroup, addToGroup, removeFromGroup, deleteChat
}