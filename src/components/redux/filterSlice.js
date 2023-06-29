import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,

  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload.toLowerCase();
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
export const getFilter = state => state.filter.filter;
