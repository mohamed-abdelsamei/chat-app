const UserController = require("../contollers/user.controller")

module.exports = (router) => {
    router.get('/', (req, res, next) => { return res.json({ msg: "ok" }) })
    router.post('/login', UserController.login)
    router.post('/register', UserController.register)
    router.get('/me', (req, res, next) => { res.json({ msg: "ok" }) })
    return router
}
