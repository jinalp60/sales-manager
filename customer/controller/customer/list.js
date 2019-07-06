'use strict';
let Customers;
module.exports = function(sequelize) {
  Customers = require('../../models/customers')(sequelize);
  const listHandler = async (req, res, next) => {
    const data = await Customers.findAll({ where: { deletedAt: null } });
    console.log('results of search query:', data);
    res.status(200).json({ result: data });
  };
  return listHandler;
};
