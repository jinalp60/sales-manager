const routes = require('express').Router();
const sequelize = require('../db');
const sellProduct = require('../controller/sellProduct')(sequelize);
routes.post('/sellProduct', sellProduct.create);

module.exports = routes;
