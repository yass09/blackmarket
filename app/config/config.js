'use-strict';

const config = {
  APP_SECRET: 'kobebryant092415081985230685270443' || process.env.APP_SECRET,
  port: 5000 || process.env.PORT,
  database: 'mongodb://localhost:27017/blackmarket'
}

module.exports = config;
