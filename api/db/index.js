const Sequelize = require('sequelize');
require('dotenv').config()

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DIALECT = process.env.DB_DIALECT;
const HOST = process.env.HOST;
const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
host: HOST,
dialect: DB_DIALECT,
operatorsAliases: false,
pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
})

const db = {
  Sequelize: Sequelize,
  db: sequelize
}
module.exports = db;