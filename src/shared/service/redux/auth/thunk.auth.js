import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../../components/http/http';
import { loginUserService, createUserService } from '../../Api/userApi';

export const registerThunk = createAsyncThunk('auth/register', async body => {
  const {data} = await createUserService(body);
  console.log(data);
  token.set(data.token);
  return data;
});

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const {data} = await loginUserService(body);
  token.set(data.token);
  return data;
});
