// backend/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  passwordHash: DataTypes.STRING,
  role: { type: DataTypes.STRING, defaultValue: 'student' }, // 'student' or 'instructor'
});

module.exports = User;
