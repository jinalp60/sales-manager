'use strict';
let Products;
module.exports = function(sequelize){
    Products = require('../../models/products')(sequelize);
    return fetchProductDetails;
}
const fetchProductDetails = async (req,res,next)=>{
    const data=await Products.findAll();
    //console.log("results of search query:",data);
    res.status(200).json({result:data});
}