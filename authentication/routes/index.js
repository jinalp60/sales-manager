const routes = require('express').Router();
const authenticationRoute = require('./authenticationRoute');

//const auth = require('../utils/auth');
//const validateToken = require('../middlewares/tokenValidation');
//validateToken
//routes.post('/api/auth',auth);
routes.use('/',authenticationRoute);
module.exports = routes;