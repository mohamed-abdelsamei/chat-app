var jwt = require('jsonwebtoken');
const UserModel = require('../models/users.model');
const config = require('../../../config');

module.exports = class UserService {
    static async create(payload) {
        return UserModel.create(payload)
    }
    static async findOneByUsername(username) {
        return UserModel.findOne({ username })
    }
    static async findOne() { }
    static async findMany() { }


    static generateJWTToken({ _id }) {
        const payload = { _id };
        return jwt.sign(payload, config.jwt.jwtSecret);
    }

    static verifyToken(jwtToken) {
        try {
            return jwt.verify(jwtToken, config.jwt.jwtSecret);
        } catch (e) {
            return null;
        }
    }
}