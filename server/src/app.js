const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path');

const bodyParser = require('body-parser')
const routes = require('./api/routes')
const app = express()
async function start() {

    app.use(cors());
    // middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));

    routes(app)

    app.listen(3000, () => {
        console.log('web server started');
    })
    return app
}


module.exports = { start }