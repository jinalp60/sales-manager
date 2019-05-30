'use strict';
let Products;
module.exports = function(sequelize){
    Products = require('../../models/products')(sequelize);

    const createHandler= async (req,res,next) =>{
        console.log("valid token body",req.body);
        //const errors=validationResult(req);
        console.log("Product:",req.body.newProduct);
    
        const result =await Products.create(req.body.newProduct);
        res.status(200).json({message:"1 row inserted"});
   
    }
  return createHandler;
}

