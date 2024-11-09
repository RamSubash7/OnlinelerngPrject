// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');  // Sequelize database config
const User = require('./models/user');          // Sequelize model for User
const authRoutes = require('./routes/auth');    // Authentication routes
const courseRoutes = require('./routes/courses'); // Course-related routes

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Sync the database and start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
