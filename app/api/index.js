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

// Test route homepage
apiRoutes.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/dist', 'index.html'));
});

// Users routes
// get all Users
apiRoutes.route('/users')
.get(userController.find);
// Register new user with authentication
apiRoutes.post('/users', authController.register);
// Login route
apiRoutes.post('/users/login', authController.login);


// Get all products
apiRoutes.get('/products', productsController.find);
// Create new product
apiRoutes.post('/products', authController.require_token, productsController.create);



module.exports = apiRoutes;
