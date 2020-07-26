module.exports = (router) => {
    router.get('/', (req, res, next) => { res.json({ msg: "ok" }) })
    return router
}
