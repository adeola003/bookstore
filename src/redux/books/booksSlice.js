import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action) => {
        
      },
      removeBook: (state, action) => {
        
      },
    },
  });

  export default booksSlice.reducer
  export const {addBook, removeBook} = booksSlice.actions