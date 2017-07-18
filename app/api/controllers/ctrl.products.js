'use-strict';

const Products = require('../../database').products;
const Users = require('../../database').users;

const productsController = {
  find: (req,res) => {
    // Products.find({name:req.query.name})
    Products.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send('Error', err);
    })
  },
  create: (req,res) =>{
    Users
      .find({ mail: req._userMail })
      .then(user => {
        const userId = user[0]._id;
        req.body._owner = userId;
        console.log(user, req.body);
        const newProduct = new Products(req.body);
        newProduct._owner = userId;
        newProduct.save()
        .then(data =>{
          res.send('success', data);
        })
        .catch(err =>{
          res.send(err);
        })
      })
  },
  findProduct: (req,res) => {
    Products.findById({_id:req.params.id})
    .then(product => {
      res.json(product)
      console.log(product);
    })
    .catch( err => {
      res.send('COULD NOT GET PRODUCT ', err)
    })
  },
  updateProduct: (req,res) => {
    Products.findById({_id:req.params.id}, (err,product) => {
      if (err) {
        res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
      }
      product._owner = req.body._owner,
      product._buyer = req.body._buyer,
      product.pictures = req.body.pictures,
      product.brand = req.body.brand,
      product.model = req.body.model,
      product.colorway = req.body.colorway,
      product.productionYear = req.body.productionYear,
      product.size = req.body.size,
      product.price = req.body.price
      product.save((err)=>{
        if(err)
          res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
        console.log(product);
        res.send(product);
      })
    })
  },
  removeProduct: (req, res) => {
    Products.remove({_id: req.params.id}, (err, product) => {
      if (err) {
        res.send(err)
      }
      res.send('USER DELETED')
    })
  }
};

module.exports = productsController;
