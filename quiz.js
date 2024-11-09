// backend/models/quiz.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Lesson = require('./lesson');

const Quiz = sequelize.define('Quiz', {
  question: { type: DataTypes.STRING },
  options: { type: DataTypes.JSON },
  correctAnswer: { type: DataTypes.STRING },
});

Quiz.belongsTo(Lesson);

module.exports = Quiz;
