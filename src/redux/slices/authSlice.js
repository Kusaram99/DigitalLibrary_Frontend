// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentUser, loginUser, logoutUser, registerUser } from './authThunk';

// === Initial State ===
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  
  // === Slice ===
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      resetAuthState: (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // ===== Login =====
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.isAuthenticated = false;
        })

        // ===== Register =====
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.isAuthenticated = false;
        })
  
        // ===== Fetch Current User =====              
        .addCase(fetchCurrentUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.user = null;
          state.isAuthenticated = false;
        })
  
        // ===== Logout =====
        .addCase(logoutUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.loading = false;
          state.user = null;
          state.isAuthenticated = false;
          state.error = null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { resetAuthState } = authSlice.actions;
  export default authSlice.reducer;