const { Sequelize } = require('sequelize');

const db = new Sequelize({
  // dialect: process.env.DB_DIALECT,
  // host: process.env.DB_HOST,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // // port: process.env.PORT2,
  // logging: false,

  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  database: 'bankapp',
  password: 'root',
  logging: false,
});

module.exports = { db };
