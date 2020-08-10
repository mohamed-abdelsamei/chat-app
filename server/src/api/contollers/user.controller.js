const UserService = require("../services/user.service")

class UserController {
    static async login(req, res, next) {
        try {


            let { username, password } = req.body
            let user = await UserService.findOneByUsername(username)
            console.log(user);
            if (!user) throw new Error("user exist")
            let valid = user.validPassword(password)
            if (!valid) throw new Error("wrong password")
            let token = UserService.generateJWTToken(user)
            res.json({ token })
        } catch (error) {
            next(error)
        }
    }

    static async register(req, res, next) {
        try {
            let { name, username, password } = req.body
            let exist = await UserService.findOneByUsername(username)
            if (exist) throw new Error("user exist")
            let user = await UserService.create({ name, username, password })
            if (!user) throw new Error("login failed")
            return res.json({ msg: "success" })
        } catch (error) {
            next(error)
        }
    }


    static async me(req, res, next) {
        return res.json({ msg: "ok" })
    }

    static async getAll(req, res, next) {
        try {
            let users = await UserService.findMany()
            users = users.map(user => UserService.toMini(user))
            res.json({ users })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController