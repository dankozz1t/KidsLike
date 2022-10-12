import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'shared/service/http/http';
import {
  loginUserService,
  getUserService,
  createUserService,
  // getGoogleService
} from 'shared/service/auth.service';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await createUserService(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await loginUserService(body);
      console.log('data: ', data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  'user/getInfo',
  async (_, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;

      if (currentToken) {
        token.set(currentToken);
      }

      const { data } = await getUserService();
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.response.data.message);
    }
  }
);
