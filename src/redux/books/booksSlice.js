import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { async } from 'q';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8QFX3Z0cfZ8ZaJnNefwx/books';

export const fetchBook = createAsyncThunk('books/fetchBook', 
  async () => {
    const response = await axios.get(URL,);
    


})


const initialState = {
  booksList: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
