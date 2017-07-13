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
    hash: bcrypt.hashSync(user.mail + ' ' + user.password, salt),
    username: user.username,
    country: user.country,
    city: user.city
  }
};

const authController = {
  register: (req, res) => {
    console.log(formatPassword(req.body))
    const newUser = new User(formatPassword(req.body));
    newUser.save()
    .then (user => {
      console.log('THIS IS USER ::::', user);
      const token = generate_token(user);
      const userData = {
        user: user[0],
        token: token
      }
      res.json(userData)
    })
    .catch(err => {
      console.log('THIS IS ERROR ::::', err);
      res.send('Registration failed ' + err)
    })
  },
  login: (req, res) => {
    console.log(req.body);
    User.find({mail: req.body.mail})
    .then(user =>{
      if (user.length > 0 && bcrypt.compareSync(req.body.mail + req.body.password, user[0].hash)){
        console.log(user[0]);
        const token = generate_token(user[0]);
        const userData = {
          username: user[0].username,
          token: token
        }
        res.json(userData);
      } else {
        res.send('failed')
      }
    })
    .catch(err =>{
      res.send('Login failed ' + err)
    })
  },
  require_token: (req, res, next) =>{
    const token = req.body.token;
    if (!token) {
      res.status(401).send('Authorization required');
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
