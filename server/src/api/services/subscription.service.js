const SubscriptionsModel = require('./../models/subscriptions.model')

module.exports = class SubscriptionService {
    static async create(rid, user) {
        return SubscriptionsModel.create({ rid, u: { id: user._id, name: user.name } })
    }
    static async findOne(id) {
        return SubscriptionsModel.findOne({ _id: id })
    }

    static async findByUser(userId) {
        return SubscriptionsModel.findMany({ 'u.id': userId })
    }

    static async findByRoom(rid) {
        return SubscriptionsModel.findMany({ rid })
    }

    static async findMany() { }
}