import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // adjust if needed
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
