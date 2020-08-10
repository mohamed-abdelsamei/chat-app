const UserService = require('../../api/services/user.service')


module.exports = (io) => {
    const getUsers = async () => {
        let users = await UserService.findMany()
        users = users.map(user => UserService.toMini(user))
        io.emit('users', users)
    }
    io.on('getUsers', getUsers)
}