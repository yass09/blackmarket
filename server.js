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
const multer = require('multer')

 // Allow CORS (cross origin request)
app.use(function (req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// Handle File upload
const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

// Logging HTTP requests
app.use(morgan('dev')); 

// Use imported routes
app.use(routes);
app.use(express.static('./public/dist'));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'public/dist/index.html'))
})
// Launch Server
app.listen(global.config.port, err => {
  console.log('Server running on ' + global.config.port);
});
