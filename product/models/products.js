'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const products = sequelize.define('products', {
    productId: Sequelize.STRING,
    productName: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    costPrice: Sequelize.INTEGER,
    salePrice: Sequelize.INTEGER
  }, {
    schema: 'public' ,
    createdAt : 'created_at',
    updatedAt : 'updated_at',
  });
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};