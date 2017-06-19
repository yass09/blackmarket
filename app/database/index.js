'use-strict';

// Import Mongoose module
const mongoose = require('mongoose');
// Create database connection
mongoose.connect(global.config.database);
// enable Mongoose Promises
mongoose.Promise = global.Promise;

// Require Models
const Users = require('./models/users.js');
const Products = require('./models/products.js');

// Set db models
const db = {
  users: mongoose.model('Users', Users),
  products: mongoose.model('Products', Products)
}


module.exports = db;
