import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'shared/service/http/http';
import {
  loginUserService,
  getUserService,
  createUserService,
} from 'shared/service/auth.service';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {

    try {
      const { data } = await createUserService(body);
      token.set(data.token);
      return data;
    } catch(error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await loginUserService(body);
      token.set(data.token);
      return data;
    } catch(error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// export const getUserThunk = createAsyncThunk('auth/info', async () => {
//   return await getUserService();
// });

export const getUserInfo = createAsyncThunk('user/getInfo', async (_,{ rejectWithValue, getState }) =>{
  console.log('start');
  try {
    const currentToken = getState().auth.token;
    if (!currentToken) {
      return rejectWithValue();
    }
    token.set(currentToken);
    const {data} = await getUserService();
    console.log(data, 'response');
    return data;
  } catch (error) {
    token.unset();
    console.log('error in operations')
    return rejectWithValue(error.response.data.message);

  }
})
