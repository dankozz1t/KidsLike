import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGiftsService, buyGiftsService } from 'shared/service/gift.service';
import { token } from 'shared/service/http/http';

export const getGiftsThunk = createAsyncThunk(
  'gift/getGifts', async (_, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;
      token.set(currentToken);
      const resp = await getGiftsService();
      return resp.data.ruGifts;
    } catch (e) {
      return rejectWithValue();
    };
  }
);

export const buyGiftsThunk = createAsyncThunk(
  'gift/buyGifts', async (body, { rejectWithValue }) => {
    try {
      const resp = await buyGiftsService(body);
      const { updatedBalance, purchasedGiftIds } = resp.data;
      return { updatedBalance, purchasedGiftIds };
    } catch (e) {
      return rejectWithValue();
    };
  }
);