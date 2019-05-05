'use strict';
module.exports= function (sequelize){
    return{
        addProduct:require('./addProduct')(sequelize),
        fetchProductDetails:require('./fetchProductDetails')(sequelize)
    }
   
}