'use-strict';
// Import Modules
const {Router} = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const apiRoutes = new Router();
apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

// controllers
const userController = require('./controllers/ctrl.users');
const productsController = require('./controllers/ctrl.products');
const authController = require('./controllers/ctrl.auth');

// Users routes

// Login route
apiRoutes.post('/login', authController.login);

// get all Users
apiRoutes.route('/users')
.get(userController.find)
// Register new user with authentication
.post(authController.register);

apiRoutes.route('/users/:id')
.get(userController.findUser)
.put(userController.updateUser)


apiRoutes.
route('/products')
.get(productsController.find)
// Create new product
.post(authController.require_token, productsController.create)

apiRoutes.route('/products/:id')
.get(productsController.findProduct)
.put(productsController.updateProduct)
.delete(productsController.removeProduct)

module.exports = apiRoutes;
