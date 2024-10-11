const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

const jwtMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded; // Attach decoded payload to req
    next(); // Proceed to next middleware
  });
};

module.exports = jwtMiddleware; 