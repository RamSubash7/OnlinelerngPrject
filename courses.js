// backend/routes/courses.js
const express = require('express');
const Course = require('../models/course');
const Lesson = require('../models/lesson');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Create Course
router.post('/', authenticate, async (req, res) => {
  if (req.user.role !== 'instructor') return res.status(403).send('Not allowed');
  const { title, description } = req.body;
  const course = await Course.create({ title, description });
  res.status(201).json(course);
});

// Add Lesson to Course
router.post('/:courseId/lessons', authenticate, async (req, res) => {
  const { title, content } = req.body;
  const { courseId } = req.params;
  const course = await Course.findByPk(courseId);
  if (!course) return res.status(404).send('Course not found');

  const lesson = await Lesson.create({ title, content, courseId });
  res.status(201).json(lesson);
});

module.exports = router;
