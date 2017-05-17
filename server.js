'use-strict';

// Import global config
global.config = require('./app/config/config.js');

// Import Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// Import Routes config
const routes = require('./app/routes.js');
// New Express Instance
const app = express();


 // Allow CORS (cross origin request)
app.use(function (req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
  next();
});

// Logging HTTP requests
app.use(morgan('dev')); 

// Use imported routes
app.use(routes);

// Launch Server
app.listen(global.config.port, err => {
  console.log('Server running on ' + global.config.port);
});
