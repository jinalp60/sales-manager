'use strict';
let sellProduct;
module.exports = function(sequelize) {
  sellProduct = require('../../models/sellProduct')(sequelize);
  const { get: getProductByName } = require('../product');
  const createHandler = async (req, res, next) => {
    console.log('valid token body', req.body);
    //const errors=validationResult(req);
    console.log('sellProduct:', req.body.sellProduct);
    const { sellProduct } = req.body;
    sellProduct.productId = getProductByName(sellProduct.productName).id;
    const result = await sellProduct.create(sellProduct);
    res.status(200).json({ message: '1 row inserted' });
  };
  return createHandler;
};
