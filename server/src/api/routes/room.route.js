module.exports = (router) => {
    /**
     * 
     * @api {GET} /rooms get all roms
     * @apiName gotRooms
     * @apiGroup Rooms
     * @apiVersion  0.0.1
     * 
     * @apiSuccess {Object[]} rooms  List of rooms.
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     rooms : []
     * }
     * 
     * 
     */

    router.get('/', (req, res, next) => { res.json({ msg: "ok" }) })
    return router
}
