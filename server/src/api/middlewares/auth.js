const UserService = require("../services/user.service");


module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'please login ' });
    const token = authorization.split(' ')[1];
    // console.log('token', token);
    if (!token) return res.status(401).json({ message: 'please login ' });
    const valid = UserService.verifyToken(token);
    if (!valid) return res.status(401).json({ message: req.__('auth.error.notAuthorized') });
    const user = await UserService.findById(valid._id);
    if (!user) return res.status(401).json({ message: req.__('auth.error.notAuthorized') });
    req.decoded = valid;
    return next();
};
