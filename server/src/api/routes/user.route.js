const UserController = require("../contollers/user.controller")
const UserService = require("../services/user.service")

module.exports = (router) => {
    router.get('/', UserController.getAll)
    router.post('/login', UserController.login)
    router.post('/register', UserController.register)
    router.get('/me', (req, res, next) => { res.json({ msg: "ok" }) })
    return router
}
