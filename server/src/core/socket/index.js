const userSocket = require('./user.socket')
const messageSocket = require('./message.socket')
const roomSocket = require('./room.socket')
const subscriptionSocket = require('./subscription.socket')
const UserService = require('../../api/services/user.service')
class Socket {
    webSocketServer
    users = new Map();

    constructor(server) {
        this.webSocketServer = require('socket.io')(server);


        this.initialize()
    }
    initialize() {
        this.webSocketServer
            .use(async (socket, next) => {
                const query = socket.handshake.query;
                if (query.token) {
                    let decoded = UserService.verifyToken(query.token)
                    let user = await UserService.findById(decoded._id)
                    if (user) user = UserService.toMini(user)
                    this.users.set(socket.id, user)
                    socket.user = user
                    next()
                }

                let err = new Error('Authentication error');
                err.data = { type: 'authentication_error' };
                next(err);
            })
            .on('connection', socket => {
                console.log("New client connected");
                userSocket(socket)
                roomSocket(socket)
                messageSocket(socket)
                subscriptionSocket(socket)

                socket.on('disconnecting', () => {

                    console.log(this.user);
                    console.log('disconnecting');
                    // the rooms array contains at least the socket ID
                });

                socket.on('disconnect', () => {
                    console.log('disconnected');
                    console.log(socket.id);
                    this.users.delete(socket.id)
                    console.log(this.users);
                });
            });

        this.webSocketServer.on('close', socket => {
            console.log("connection closed");
            // console.log(socket);
        });



    }
}

module.exports = Socket