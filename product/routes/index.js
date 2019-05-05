const routes = require('express').Router();
const validateToken = require('../middlewares/tokenValidation');

const productRoute = require('./productRoute');

routes.use('/',validateToken,productRoute);
module.exports = routes;