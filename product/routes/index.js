const routes = require('express').Router();
const validateToken = require('../middlewares/tokenValidation');

const productRoute = require('./productRoute');
const sellProductRoute = require('./sellProductRoute');

routes.use('/', validateToken, productRoute);
routes.use('/', validateToken, sellProductRoute);

module.exports = routes;
