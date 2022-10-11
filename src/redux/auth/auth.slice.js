import { createSlice } from '@reduxjs/toolkit';
import { getUserThunk, loginThunk, registerThunk} from './auth.thunk';
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
    },
    [registerThunk.rejected]: state => {
      state.status = false;
    },
    [getUserThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [getUserThunk.rejected]: state => {
      state.status = false;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginThunk.rejected]: state => {
      state.status = false;
    },
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
