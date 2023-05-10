import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksSlice"
import categoryReducer from "./categories/categoriesSlice"

export const store = configureStore({
    reducer: {
        book: booksReducer,
        category: categoryReducer,
    }
})