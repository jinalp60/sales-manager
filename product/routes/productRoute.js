const routes = require('express').Router();
const sequelize = require('../db');
const product = require('../controller/product')(sequelize);
routes.post('/addProduct',product.create);
routes.get('/fetchProductDetails',product.list);
routes.patch('/addProductQuantity',product.update);
module.exports =routes;