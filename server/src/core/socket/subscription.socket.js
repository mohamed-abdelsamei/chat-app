const { Events } = require('../../utils/constants')

module.exports = (io) => {
    const createSubscription = () => { }
    const getSubscriptions = () => { }

    io.on(Events.createSubscription, createSubscription)
    io.on(Events.getSubscriptions, getSubscriptions)
}