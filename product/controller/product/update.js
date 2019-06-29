'use strict';
let Products;
module.exports = sequelize => {
  Products = require('../../models/products')(sequelize);
  const updateHandler = async (req, res, next) => {
    const { productId, addQuantity } = req.body;
    const product = await Products.findOne({ where: { productId, deletedAt: null } });

    const data = await Products.update(
      { quantity: product.quantity + addQuantity },
      {
        where: { productId }
      }
    );
    console.log('results of search query:', data);
    res.status(200).json({ result: data });
  };
  return updateHandler;
};
