'use-strict';

const Users = require('../../database').users;

const userController = {
  find: (req,res) => {
    Users.find()
    .exec()
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
      res.send('user successfully created', data);
    })
    .catch (err =>{
      res.send('err in creating user', err);
    })
  },
  findUser: (req,res) => {
    Users.findById({_id:req.params.id})
    .then (user => {
      const userData = {
        id: user.id,
        username: user.username,
        mail: user.mail,
        country: user.country,
        city: user.city,
        dateCreated: user.dateCreated,
        sales: user.sales
      }
      console.log(userData)
      res.json(userData)
    })
    .catch ( err => {
      res.send('COULD NOT GET USER ', err)
    })
  },
  updateUser: (req,res) => {
    Users.findById({_id:req.params.id}, (err,user) => {
      if (err) {
        res.send(err);
        // res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
      }
      user.mail = req.body.mail,
      // user.hash,
      user.username = req.body.username,
      user.profilePicture = req.body.profilePicture,
      user.country = req.body.country,
      user.city = req.body.city,
      user.sales = req.body.sales
      user.save((err)=>{
        if (err) {
          res.send(err).status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
        }
        console.log(user);
        res.send(user);
      });
    });
  }
};




module.exports = userController;
