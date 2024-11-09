// frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then((res) => {
        setCourses(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <a href={`/course/${course.id}`}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
