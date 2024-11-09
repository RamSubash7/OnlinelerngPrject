// backend/models/course.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
});

module.exports = Course;
