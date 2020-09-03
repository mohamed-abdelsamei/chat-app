const { Events } = require('../../utils/constants')
const SubscriptionService = require('../../api/services/subscription.service')

module.exports = (io) => {
    const createSubscription = async () => {

    }
    const getSubscriptions = async () => {
        try {
            let subscriptions = await SubscriptionService.findByUser(io.user._id)
            io.emit(Events.getSubscriptions, { subscriptions })
        } catch (error) {
            console.log(error);
        }
    }

    io.on(Events.createSubscription, createSubscription)
    io.on(Events.getSubscriptions, getSubscriptions)

}