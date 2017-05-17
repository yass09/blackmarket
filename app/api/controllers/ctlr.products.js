'use-strict';

const Products = require('../../database').products;

const productsController = {
  find: (req,res) => {
    Products.find({name:req.query.name})
    .then(data =>{
      res.send('Success :::' + data);
    })
    .catch(err => {
      res.send('Error' + error);
    })
  },
  create: (req,res) =>{
    const newProduct = new Products(req.body);
    newProduct.save()
    .then(data =>{
      res.send('product successfully created' + data);
    })
    .catch(err =>{
      res.send('err' + err + 'in creating product');
    })
  }
};

module.exports = productsController;
