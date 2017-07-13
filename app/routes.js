'use-strict';

// Import Modules
const express = require('express');
const apiRoutes = require('./api');

const routes = new express.Router();

// Define routes
routes.use('/api', apiRoutes);

module.exports = routes;
