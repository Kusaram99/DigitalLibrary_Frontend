// Inside authThunks.js or directly in your slice

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/authApi'

// Async thunk for fetching current user
export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, thunkAPI) => {
  try {
    const response = await authApi.getCurrentUser();
    console.log("fetch current user: ", response.data?.data?.user);
    return response.data?.data?.user;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch user');
  }
});

// Aync thunk for Register User
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {

      // Call the register API with userData
      const response = await authApi.register(userData);
      console.log("Response from register: ", response.data?.data?.user);

      return response.data?.data?.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to register user'
      );
    }
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
  try {
    const response = await authApi.login(credentials);
    console.log("Response from login: ", response);
    return response.data?.data?.user;
  } catch (err) {
    console.log("Error from login: ", err.response);
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

// Async thunk for user logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await authApi.logout();
});
