'use strict';
const Sequelize = require('sequelize');
module.exports = sequelize => {
  const customers = sequelize.define(
    'customers',
    {
      firstName: Sequelize.STRING,
      lastName: Sequelize.INTEGER,
      phoneNumber: Sequelize.INTEGER,
      city: Sequelize.STRING,
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
  customers.associate = function(models) {
    // associations can be defined here
  };
  return customers;
};
