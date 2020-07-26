const UserService = require("../services/user.service")

class UserController {
    static async login(req, res, next) {
        let { username, password } = req.body
        let user = await UserService.findOneByUsername(username)
        console.log(user);
        if (!user) throw new Error("user exist")
        let valid = user.validPassword(password)
        if (!valid) throw new Error("wrong password")
        let token = UserService.generateJWTToken(user)
        res.json({ token })

    }

    static async register(req, res, next) {
        let { name, username, password } = req.body
        let exist = await UserService.findOneByUsername(username)
        if (exist) throw new Error("user exist")
        let user = await UserService.create({ name, username, password })
        if (!user) throw new Error("login failed")
        return res.json({ msg: "success" })
    }


    static async me(req, res, next) {
        return res.json({ msg: "ok" })
    }
}
module.exports = UserController