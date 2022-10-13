import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGiftsService, buyGiftsService } from 'shared/service/gift.service';

export const getGiftsThunk = createAsyncThunk(
  'gift/getGifts', async (_, { rejectWithValue }) => {
    try {
      const resp = await getGiftsService();
      console.log(resp.data.ruGifts);

      return resp.data.ruGifts;
    } catch (e) {
      console.log(e);
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