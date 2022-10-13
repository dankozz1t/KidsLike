import { createSlice } from '@reduxjs/toolkit';
import { getGiftsThunk, buyGiftsThunk } from './gift.thunk';
import giftInitialState from './gift.initial-state';

const giftSlice = createSlice({
  name: 'gift',
  initialState: giftInitialState,
  reducers: {
    toggleSelectGift(state, { payload }) {
      state.gifts[payload].isSelected = !state.gifts[payload].isSelected;
    },
    refreshBoughtGiftsIds(state, { payload }) {
      state.boughtGiftsIds = [];
      state.gifts = payload;
    },
  },
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
      state.boughtGiftsIds = payload.purchasedGiftIds;
      state.isLoading = false;
    },
    [buyGiftsThunk.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { toggleSelectGift, refreshBoughtGiftsIds } = giftSlice.actions;
export const giftReducer = giftSlice.reducer;
