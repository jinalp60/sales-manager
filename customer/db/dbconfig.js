module.exports = {
  development: {
    database: 'salesmanager-customer',
    host: 'customer-db',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
  },
  test: {
    database: 'salesmanager-customer',
    host: '192.168.99.100',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
  },
  production: {
    database: 'salesmanager-customer',
    host: 'customer-db',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
  }
};
