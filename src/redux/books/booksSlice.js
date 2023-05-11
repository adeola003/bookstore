import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8QFX3Z0cfZ8ZaJnNefwx/books';

export const fetchBook = createAsyncThunk('books/fetchBook',
  async () => {
    const response = await axios.get(URL);
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return books;
  });

export const postBook = createAsyncThunk('books/postBook',
  async (bookDetails) => {
    await axios.post(URL, bookDetails);
    return bookDetails;
  });

export const delBook = createAsyncThunk('books/delBook',
  async (bookId) => {
    await axios.delete(`${URL}/${bookId}`);
    return bookId;
  });

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
      state.booksList = state.booksList.filter((item) => item.item_id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        console.log(action);
        state.status = 'succeeded';
        state.booksList = action.payload;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.booksList.push(action.payload);
      })
      .addCase(delBook.fulfilled, (state, action) => {
        state.booksList = state.booksList.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
