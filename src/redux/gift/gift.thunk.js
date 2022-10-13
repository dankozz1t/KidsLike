import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGiftsService, buyGiftsService } from 'shared/service/gift.service';

export const getGiftsThunk = createAsyncThunk(
  'gift/getGifts', async (_, { rejectWithValue }) => {
    try {
      const resp = await getGiftsService();
      return resp.ruGifts;
    } catch (e) {
      return rejectWithValue();
    };
  }
);

export const buyGiftsThunk = createAsyncThunk(
  'gift/buyGifts', async (body, { rejectWithValue }) => {
    try {
      const resp = await buyGiftsService(body);
      const { updatedBalance, purchasedGiftIds } = resp;
      return { updatedBalance, purchasedGiftIds };
    } catch (e) {
      return rejectWithValue();
    };
  }
);