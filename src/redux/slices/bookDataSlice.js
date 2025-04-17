import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookData: {
        author: "",
        category: "",
        cover_image: "",
        createdAt: "",
        description: "",
        file_url: "",
        price: 0,
        seller_id: "",
        shortSummary: "",
        title: "",
        updatedAt: "", 
        _id: ""
    }
};

const bookDataSlice = createSlice({
    name: 'bookData',
    initialState,
    reducers: {
        setBookData: (state, action) => {
            state.bookData = action.payload;
        }, 
        resetBookData: (state) => {
            state.bookData = initialState.bookData;
        }
    }
});

export const { setBookData, resetBookData } = bookDataSlice.actions;

export default bookDataSlice.reducer;