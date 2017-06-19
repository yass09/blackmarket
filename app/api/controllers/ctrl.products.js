'use-strict';

const Products = require('../../database').products;
const Users = require('../../database').users;

const productsController = {
  find: (req,res) => {
    Products.find({name:req.query.name})
    .populate('_owner')
    .then(data =>{
      res.send('Success :::' + data);
    })
    .catch(err => {
      res.send('Error' + error);
    })
  },
  create: (req,res) =>{
    console.log(req._userMail);
    Users
      .find({ mail: req._userMail })
      .then(user => {
        const userId = user[0]._id;
        req.body._owner = userId;
        console.log(user, req.body,'hahshdjashdjsahjfsdfdsfds');
        const newProduct = new Products(req.body);
        // newProduct._owner = userId;
        newProduct.save()
        .then(data =>{
          res.send('product successfully created' + data);
        })
        .catch(err =>{
          res.send('err' + err + 'in creating product');
        })
      })
  }
};

module.exports = productsController;
