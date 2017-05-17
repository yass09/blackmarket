'use-strict';

const Users = require('../../database').users;

const userController = {
  find: (req,res) =>{
    Users.find()
    .populate('products')
    .then (data =>{
      res.send(data);
    })
    .catch(err =>{
      res.send(err);
    })
  },
  create: (req,res) =>{
    const newUser = new Users(req.body);
    newUser.save()
    .then (data =>{
      res.send('user successfully created' + data);
    })
    .catch (err =>{
      res.send('err' + err + 'in creating user');
    })
  },
  restricted: (req,res) =>{
    console.log('accessed the restricted area');
    req.send('access authorized');
  }
}

module.exports = userController;
