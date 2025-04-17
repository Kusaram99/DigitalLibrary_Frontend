import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './slices/darkModeSlice';
import authReducer from './slices/authSlice';
import bookDataReducer from './slices/bookDataSlice';

const store =  configureStore({
    reducer : {
      mode : darkModeReducer,
      auth : authReducer,
      bookData: bookDataReducer
    }
})

export default store;