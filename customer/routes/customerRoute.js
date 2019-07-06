const routes = require('express').Router();
const sequelize = require('../db');
const customer = require('../controller/customer')(sequelize);
routes.post('/addCustomer', customer.create);
// routes.get('/fetchProductDetails', customer.list);
// routes.patch('/addProductQuantity', customer.update);
// routes.delete('/deleteProduct/:productId', customer.delete);
module.exports = routes;
