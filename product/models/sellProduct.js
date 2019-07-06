'use strict';
const Sequelize = require('sequelize');
module.exports = sequelize => {
  const sellProduct = sequelize.define(
    'sellProduct',
    {
      phoneNumber: Sequelize.INTEGER,
      productId: Sequelize.STRING,
      productName: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      deletedAt: { type: Sequelize.DATE, field: 'deleted_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' }
    },
    {
      schema: 'public'
      // createdAt: 'created_at',
      // updatedAt: 'updated_at',
      // deletedAt: 'deleted_at'
    }
  );
  sellProduct.associate = function(models) {
    // associations can be defined here
  };
  return sellProduct;
};
