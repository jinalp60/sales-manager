'use strict';
let Products;
module.exports = function(sequelize) {
  Products = require('../../models/products')(sequelize);
  const listHandler = async (req, res, next) => {
    const data = await Products.findAll({ where: { deletedAt: null } });
    console.log('results of search query:', data);
    res.status(200).json({ result: data });
  };
  return listHandler;
};
