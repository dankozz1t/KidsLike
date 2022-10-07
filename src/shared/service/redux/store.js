import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    name: [],
  },
  reducers: {
    addName(state, { payload }) {
      state.name.push(payload);
    },
  },
});

export const { addName } = nameSlice.actions;
