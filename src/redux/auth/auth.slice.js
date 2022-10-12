import { createSlice } from '@reduxjs/toolkit';
import { getUserInfoThunk, loginThunk, registerThunk } from './auth.thunk';
import authInitialState from './auth.initial-state';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logoutAction: () => authInitialState,
  },

  extraReducers: {
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
      state.user = payload.user;
      state.week = payload.week;
    },
    [registerThunk.rejected]: state => {
      state.status = false;
    },
    [getUserInfoThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
      state.user = payload.user;
      state.week = payload.week;
    },
    [getUserInfoThunk.rejected]: state => {
      state.status = false;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
      state.user = payload.user;
      state.week = payload.week;
    },
    [loginThunk.rejected]: state => {
      state.status = false;
    },
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
