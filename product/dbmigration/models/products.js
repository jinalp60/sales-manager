'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const products = sequelize.define('products', {
    productId: Sequelize.STRING,
    productName: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    basePrice: Sequelize.INTEGER,
    minPrice: Sequelize.INTEGER,
    maxPrice: Sequelize.INTEGER
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};