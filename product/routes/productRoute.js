const routes = require('express').Router();
const sequelize = require('../db');
const product = require('../controller/product')(sequelize);
routes.post('/addProduct',product.addProduct);
routes.get('/fetchProductDetails',product.fetchProductDetails)
module.exports =routes;