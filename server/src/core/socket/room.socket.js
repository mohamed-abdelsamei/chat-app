module.exports = (io) => {
    const createRoom = () => { }
    const getRooms = () => { }

    io.on('createRoom', createRoom)
    io.on('getRooms', getRooms)
}