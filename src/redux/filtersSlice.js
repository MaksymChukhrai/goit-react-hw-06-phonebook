import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;