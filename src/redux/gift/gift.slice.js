import { createSlice } from '@reduxjs/toolkit';
import { getGiftsThunk, buyGiftsThunk } from './gift.thunk';
import giftInitialState from './gift.initial-state';

const giftSlice = createSlice({
  name: 'gift',
  initialState: giftInitialState,

  extraReducers: {
    [getGiftsThunk.pending]: state => {
      state.isLoading = true;
    },
    [getGiftsThunk.fulfilled]: (state, { payload }) => {
      state.gifts = payload;
      state.isLoading = false;
    },
    [getGiftsThunk.rejected]: state => {
      state.isLoading = false;
    },
    [buyGiftsThunk.pending]: state => {
      state.isLoading = true;
    },
    [buyGiftsThunk.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.buyedGiftsIds = payload.purchasedGiftIds;
      state.isLoading = false;
    },
    [buyGiftsThunk.rejected]: state => {
      state.isLoading = false;
    },
  }
});

export const giftReducer = giftSlice.reducer;
