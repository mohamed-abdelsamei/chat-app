const { Events } = require('../../utils/constants')
const UserService = require('../../api/services/user.service')
const RoomService = require('../../api/services/room.service')
const MessageService = require('../../api/services/message.service')
const SubscriptionService = require('../../api/services/subscription.service')
module.exports = (io) => {
    const createMessage = async ({ msg, rId }) => {
        try {

            let user = await UserService.findById(io.user._id)
            const data = { msg, rId, u: { id: user._id, name: user.name } }
            let message = await MessageService.create(data)
            io.broadcast.emit(Events.messageChanged, { status: "created", message })

        } catch (error) {
            console.log(error);
        }
    }
    const getMessages = async () => {
        try {
            let messages = await MessageService.findByRoomId(io.user._id)
            io.emit(Events.getMessages, { messages })
        } catch (error) {
            console.log(error);
        }
    }

    io.on(Events.createMessage, createMessage)
    io.on(Events.getMessages, getMessages)
}