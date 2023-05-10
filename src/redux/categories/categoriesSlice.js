import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCategories: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    catStatus: (state) => state.status,
  },
});

export default categorySlice.reducer;
export const { catStatus } = categorySlice.actions;
