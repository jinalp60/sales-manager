'use strict';
let Customers;
module.exports = function(sequelize) {
  Customers = require('../../models/customers')(sequelize);

  const createHandler = async (req, res, next) => {
    console.log('valid token body', req.body);
    //const errors=validationResult(req);
    console.log('Customer:', req.body.newCustomer);
    // console.log('sequelize:', sequelize);
    const result = await Customers.create(req.body.newCustomer);
    res.status(200).json({ message: '1 row inserted' });
  };
  return createHandler;
};
