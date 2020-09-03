const SubscriptionsModel = require('./../models/subscriptions.model')

module.exports = class SubscriptionService {


    static async create(rId, user, type, name, owner) {
        console.log(rId, user, type, owner);
        return SubscriptionsModel.create({ rId, type, owner, name, u: { id: user._id, name: user.name } })
    }

    static async findOne(id) {
        return SubscriptionsModel.findOne({ _id: id })
    }

    static async findByUser(userId) {
        return SubscriptionsModel.find({ 'u.id': userId })
    }

    static async findByRoom(rid) {
        return SubscriptionsModel.findMany({ rid })
    }

}