import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from './week.operations';
import {weekInitialState} from './week.initial-state';


const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

const weekSlice = createSlice({
  name: 'userInfo',
  initialState: weekInitialState,
  extraReducers: {
    [getUserInfo.pending]: handlePending,
    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.startWeekDate = payload.week.startWeekDate;
      state.endWeekDate = payload.week.endWeekDate;
      state.rewardsGained = payload.week.rewardsGained;
      state.rewardsPlanned = payload.week.rewardsPlanned;
    },
    [getUserInfo.rejected]: handleRejected,

},
});

const { reducer: weekReducer } = weekSlice;
export default weekReducer;
