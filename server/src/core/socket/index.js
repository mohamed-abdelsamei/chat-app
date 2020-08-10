const userSocket = require('./user.socket')
const chatSocket = require('./chat.socket')
const roomSocket = require('./room.socket')
const subscriptionSocket = require('./subscription.socket')
class Socket {
    webSocketServer
    users = new Map();

    constructor(server) {
        this.webSocketServer = require('socket.io')(server);


        this.initialize()
    }
    initialize() {
        this.webSocketServer.on('connection', socket => {
            console.log("New client connected");
            // console.log(socket);
            userSocket(socket)
            roomSocket(socket)
            chatSocket(socket)
            subscriptionSocket(socket)
        });
        this.webSocketServer.on('close', socket => {
            console.log("connection closed");
            // console.log(socket);
        });



    }
}

module.exports = Socket