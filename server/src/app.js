const express = require('express')
const cors = require('cors')
const path = require('path');
const WebSocket = require('./core/socket');

const routes = require('./api/routes')
const app = express()
let server = require('http').createServer(app);

const ws = new WebSocket(server)

app.use(cors());
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

routes(app)





module.exports = server