import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'shared/service/http/http';
import {
  loginUserService,
  // createUserService,
  getUserService,
} from 'shared/service/auth.service';

// export const registerThunk = createAsyncThunk(
//   'auth/register',
//   async (body, { rejectWithValue }) => {
//     try {
//       const { data } = await createUserService(body);
//       token.set(data.token);
//       return data;
//     } catch (e) {
//       return rejectWithValue();
//     }
//   }
// );

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const { data } = await loginUserService(body);
  token.set(data.token);
  return data;
});

export const getUserThunk = createAsyncThunk('auth/info', async () => {
  return await getUserService();
});
