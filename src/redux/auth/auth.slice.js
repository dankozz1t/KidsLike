import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo, loginThunk, registerThunk} from './auth.thunk';
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
    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.user = payload.user;
      state.week = payload.week;
    },
    [getUserInfo.rejected]: state => {
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
