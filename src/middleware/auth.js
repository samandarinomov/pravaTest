const jwt = require('jsonwebtoken');
const User = require('../../src/models/User');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = await User.findById(decoded.userId);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};
