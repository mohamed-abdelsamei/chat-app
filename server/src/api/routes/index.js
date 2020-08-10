const userRoutes = require("./user.route");
const roomRoutes = require("./room.route");
const subscriptionRoutes = require("./subscription.route");
const express = require('express')
const router = express.Router()

module.exports = (app) => {
    app.use('/api/user', userRoutes(router));
    app.use('/api/room', roomRoutes(router));
    app.use('/api/subscription', subscriptionRoutes(router));
    app.use((err, req, res, next) => {
        console.log(err);
        res.status(400).json({ msg: "error" })
    })
};

