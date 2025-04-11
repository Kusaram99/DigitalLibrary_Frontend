import axios from 'axios';
import store from '../redux/store';
import { fetchCurrentUser, logoutUser } from '../redux/slices/authThunk';


const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // allows sending cookies
});

// Refresh token interceptor
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post(import.meta.env.VITE_API_REFRESH_TOKEN_URL);
        await store.dispatch(fetchCurrentUser());
        return api(originalRequest);
      } catch (refreshErr) {
        store.dispatch(logoutUser());
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
