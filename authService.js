// frontend/src/services/authService.js
import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:5000/api/auth/login', { email, password })
    .then((res) => res.data);
};
