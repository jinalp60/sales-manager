const routes = require('express').Router();
const validateToken = require('../middlewares/tokenValidation');

const customerRoute = require('./customerRoute');

routes.use('/', validateToken, customerRoute);

module.exports = routes;
