const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {

const token = req.headers['authorization'];
// console.log("token", token)
  if (!token) {
    return res.status(403).send({ message: 'No token provided!, Please Login first' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'You are not authorized!, please login first!' });
    }

    req.userId = decoded.id;
    username = decoded.username;
    console.log("username",username, req.userId);
    next();
});
};

module.exports = { authenticate };
