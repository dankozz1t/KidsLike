import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'shared/service/http/http';
import { loginUserService, getUserService } from 'shared/service/auth.service';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await loginUserService(body);
      token.set(data.token);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

export const getUserThunk = createAsyncThunk('auth/info', async () => {
  return await getUserService();
});
