const RoomModel = require('./../models/rooms.model')
module.exports = class RoomService {
    static async create(data) {
        return RoomModel.create(data)
    }
    static async findOne() { }
    static async findMany() { }
}