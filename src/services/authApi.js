import axios from "../utils/axiosInstance";

// Login user and set cookies
export const login = (credentials) => {
  return axios.post(import.meta.env.VITE_API_LOGIN_URL, credentials);
};

// Logout user and clear cookies
export const logout = () => {
  return axios.post(import.meta.env.VITE_API_LOGOUT_URL);
};

// Fetch current logged-in user from cookie token
export const getCurrentUser = () => {
  return axios.post(import.meta.env.VITE_API_GET_CURRENT_USER_URL);
};

// Refresh access token silently (called from interceptor)
export const refreshToken = () => {
  return axios.post(import.meta.env.VITE_API_REFRESH_TOKEN_URL);
};

// Optional: Register new user
export const register = (userData) => {
  return axios.post(import.meta.env.VITE_API_REGISTER_URL, userData);
};
