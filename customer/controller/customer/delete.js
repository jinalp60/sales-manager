'use strict';
let Products;
module.exports = sequelize => {
  Products = require('../../models/products')(sequelize);
  const deleteHandler = async (req, res, next) => {
    const { productId } = req.params;
    console.log('productId', productId);
    const product = await Products.findOne({ where: { productId, deletedAt: null } });
    if (product) {
      const data = await Products.update(
        { deletedAt: new Date() },
        {
          where: { productId, deletedAt: null }
        }
      );
      console.log('results of search query:', data);
      res.status(200).json({ result: data });
    }
    res.status(400).json({ message: 'product is already deleted' });
  };
  return deleteHandler;
};
