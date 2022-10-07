import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './thunk.auth';
import authInitialState from './initial-state.auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logoutAction: () => authInitialState,
  },

  extraReducers: {
    [registerThunk.fulfilled]: (state, { payload }) => {
      console.log("payload: ", payload);
      state.status = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [registerThunk.rejected]: state => {
      state.status = false;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      console.log("payload: ", payload);
      state.status = true;
      state.token = payload.token;
      state.data = payload.data;
    },
    [loginThunk.rejected]: state => {
      state.status = false;
    },
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
