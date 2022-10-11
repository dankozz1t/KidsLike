import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchUserInfo} from '../../shared/service/userApi';
import { token } from 'shared/service/http/http';

export const getUserInfo = createAsyncThunk('user/getInfo', async (_,{ rejectWithValue, getState }) =>{
  console.log('start');
  try {
    const currentToken = getState().auth.token;
    if (!currentToken) {
      return rejectWithValue();
    }
    token.set(currentToken);
    const response = await fetchUserInfo();
    console.log(response, 'response');
    return response;
  } catch (error) {
    token.unset();
    console.log('error in operations')
    return rejectWithValue({
      message: error.message,
      status: error.response.status,
    });
  }
})
