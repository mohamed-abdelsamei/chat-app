const RoomModel = require('./../models/rooms.model')
module.exports = class RoomService {
    static async create(data) {
        return RoomModel.create(data)
    }

    static async findOne(q) {
        return RoomModel.findOne(q)
    }

    static async findMany(q) {
        return RoomModel.find(q)
    }

    static async findByOwner(id) {
        return RoomModel.find({ owner: id })
    }

    static async findByUser(id) {
        return RoomModel.find({ members: id })
    }
}