'use-strict';

// Import Modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');

// Import UserModel
const User = require('../../database').users;

const generate_token = (user) => {
  // payload for user session information
  const payload = {
    // expiry of token
    exp: moment().add(14,'days').unix(),
    // time of issue of token
    iat: moment().unix(),
    // issuer of token
    iss: user.mail,
    // subject of token, ie password
    sub: user.hash
  }
  return jwt.sign(payload, global.config.APP_SECRET);
};

const formatPassword = (user) => {
  // add salt to encrypt password and hash it
  const salt = bcrypt.genSaltSync(10);
  return {
    mail: user.mail,
    hash: bcrypt.hashSync(user.mail + user.password, salt)
  }
};

const authController = {
  register: (req, res) => {
    const newUser = new User(formatPassword(req.body));
    newUser.save()
    .then (user => {
      const token = generate_token(user[0]);
      res.send(token)
    })
    .catch(err => {
      res.send('Registration operation failed because' + err)
    })
  },
  login: (req, res) => {
    User.find({mail: req.body.mail})
    .then(user =>{
      if (user.length > 0 && bcrypt.compareSync(req.body.mail + req.body.password, user[0].hash)){
        const token = generate_token(user[0]);
        res.send(token);
      }
    })
    .catch(err =>{
      res.send('Login failed because of this error ' + err)
    })
  },
  require_token : (req, res, next) =>{
    const token = req.query.token;
    if (!token) {
      res.send('Authorization required');
    } else {
      jwt.verify(token, global.config.APP_SECRET, (err, decoded) => {
        if (err || decoded.exp < moment().unix()) res.send('Token Expired');
        else if (err) res.send('Unauthorized');
        else {
          req._userMail = decoded.iss;
          next();
        }
      });
    }
  }
};

module.exports = authController;
