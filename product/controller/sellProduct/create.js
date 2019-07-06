'use strict';
let sellproducts;
module.exports = function(sequelize) {
  sellproducts = require('../../models/sellproducts')(sequelize);
  const { getProductByName } = require('./helpers')(sequelize);
  const createHandler = async (req, res, next) => {
    console.log('valid token body', req.body);
    //const errors=validationResult(req);
    console.log('sellProduct:', req.body.sellProduct);
    const { sellProduct } = req.body;
    const product = await getProductByName(sellProduct.productName);
    if (!product) {
      res.status(400).json({ message: "product is either deleted or doesn't exist" });
      return;
    }
    sellProduct.productId = product.id;
    console.log('sellProduct:', sellProduct);
    const result = await sellproducts.create(sellProduct);
    res.status(200).json({ message: '1 row inserted' });
  };
  return createHandler;
};
