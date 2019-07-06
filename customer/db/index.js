const Sequelize = require('sequelize');
const { development } = require('./dbconfig');
const { host, dialect, database, username, password } = development;
const sequelize = new Sequelize(database, username, password, {
  host,

  dialect,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
module.exports = sequelize;
