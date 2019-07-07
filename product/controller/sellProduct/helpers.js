'use strict';
let Products;
module.exports = sequelize => {
  Products = require('../../models/products')(sequelize);
  return {
    getProductByName: async productName => {
      const product = await Products.findOne({ where: { productName, deletedAt: null } });
      if (product) {
        return Promise.resolve(product);
      }
      return null;
    }
  };
};
