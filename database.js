// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',  // Path to your SQLite file
});

module.exports = sequelize;
