const Chat = require('../models/chatModel')
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
                res.status(200).json(chat);
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
module.exports = {
    getChat
}