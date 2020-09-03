const MessageModel = require('./../models/messages.model')
module.exports = class MessageService {
    static async create(data) {
        return MessageModel.create(data)
    }

    static async findByRoomId(id) {
        return MessageModel.find({ rid: id })
    }

    static async findByUser(id) {
        return MessageModel.find({ 'u.id': id })
    }
}