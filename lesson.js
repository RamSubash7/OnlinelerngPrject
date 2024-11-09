// backend/models/lesson.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('server/config/database/models/lesson/course');

const Lesson = sequelize.define('Lesson', {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.TEXT },
});

Lesson.belongsTo(Course); // Associate Lesson with Course

module.exports = Lesson;
