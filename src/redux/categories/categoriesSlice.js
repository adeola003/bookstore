import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCategories: [],
    status: 'Under construction'
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      catStatus: (state) => {
        return state.status
      },
    },
  });

  export default categorySlice.reducer
  export const {addBook, removeBook} = booksSlice.actions