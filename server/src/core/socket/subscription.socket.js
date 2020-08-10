module.exports = (io) => {
    const createSubscription = () => { }
    const getSubscriptions = () => { }

    io.on('createSubscription', createSubscription)
    io.on('getSubscriptions', getSubscriptions)
}