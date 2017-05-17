'use-strict';
// Import Modules
const {Router} = require('express');
const bodyParser = require('body-parser');

// Routes
const apiRoutes = new Router();
apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

// controllers
const userController = require('./controllers/ctrl.users');
const productsController = require('./controllers/ctlr.products');
const authController = require('./controllers/ctrl.auth');

// Test route
apiRoutes.get('/', (req,res) => {
  res.send('hello ca marche');
});

apiRoutes.get('/users', userController.find);
apiRoutes.post('/users', userController.create);

apiRoutes.get('/products', productsController.find);
apiRoutes.post('/products', productsController.create);



module.exports = apiRoutes;
