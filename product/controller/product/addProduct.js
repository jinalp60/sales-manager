'use strict';
let Products;
module.exports = function(sequelize){
  Products = require('../../models/products')(sequelize);
  return addProduct;
}
const addProduct= async (req,res,next) =>{
    console.log("valid token body",req.body);
    //const errors=validationResult(req);
    console.log("Product:",req.body.newProduct);
    
    //let result =await Products.create(req.body.newProduct);
    res.status(200).json({message:"1 row inserted"});
   
}
