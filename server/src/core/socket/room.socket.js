const { Events } = require('../../utils/constants')
const UserService = require('../../api/services/user.service')
const RoomService = require('../../api/services/room.service')
module.exports = (io) => {
    const createRoom = async ({ users }) => {
        try {
            let members = await UserService.findMany({ _id: { $in: users } })
            members = members.map(member => UserService.toMini(member))
            const data = { id: Math.random(), members: users, owner: io.user._id }
            let room = await RoomService.create(data)
            io.broadcast.emit(Events.roomChanged, { status: "created", room })
        } catch (error) {
            console.log(error);
        }
    }
    const getRooms = async () => {
        try {
            let rooms = await RoomService.findByUser(io.user._id)
            io.emit(Events.getRooms, { rooms })
        } catch (error) {
            console.log(error);
        }
    }

    io.on(Events.createRoom, createRoom)
    io.on(Events.getRooms, getRooms)
}