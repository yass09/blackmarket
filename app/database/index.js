'use-strict';

const mongoose = require('mongoose');
mongoose.connect(global.config.database);

const Users = require('./models/users.js');
const Products = require('./models/products.js');

const db = {
  users: mongoose.model('Users', Users),
  products: mongoose.model('Products', Products)
}

module.exports = db;
