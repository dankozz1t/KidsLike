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
  async (tokenParams, { rejectWithValue, getState }) => {
    let stateToken = tokenParams;
    try {
      if (!tokenParams) {
        const currentToken = getState().auth.token;

        if (!currentToken) {
          return rejectWithValue();
        }

        stateToken = currentToken;
      }
      token.set(stateToken);
      const { data } = await getUserService();
      return { ...data, token: stateToken };
    } catch (error) {
      token.unset();
      return rejectWithValue(error.response.data.message);
    }
  }
);
