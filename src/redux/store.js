import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './slices/darkModeSlice';
import authReducer from './slices/authSlice';

const store =  configureStore({
    reducer : {
      mode : darkModeReducer,
      auth : authReducer
    }
})

export default store;