import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.booksList = state.booksList.filter((item) => item.id !== itemId);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
