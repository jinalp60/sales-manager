'use strict';
module.exports= function (sequelize){
    return{
        create:require('./create')(sequelize),
        list:require('./list')(sequelize)
    }
   
}