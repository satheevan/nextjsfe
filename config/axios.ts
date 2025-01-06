import axios from 'axios';
import Cookies from 'js-cookie'; // Assumes you're using js-cookie to manage cookies

// Create an Axios instance
const api = axios.create({
  baseURL: process.env?.NEXT_PUBLIC_API_BASE_URL, // Use environment variable for API base URL
  timeout: 10000, // Set timeout
});

// Add a request interceptor to include the auth token from cookies
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('authToken'); // Get the auth token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common responses (e.g., 401 errors)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized error globally
      console.error('Unauthorized! Redirecting to login...');
      // Optionally redirect to login page
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
