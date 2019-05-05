const routes = require('express').Router();

const tokenValidation = require('../middlewares/tokenValidation')
const auth = require('../utils/auth')

routes.post('/auth',auth);
routes.post('/tokenValidation',tokenValidation)

module.exports =routes;