import { createSlice } from '@reduxjs/toolkit';
import { getUserInfoThunk, loginThunk } from '../auth/auth.thunk';
import {
  createTaskThunk,
  addTaskToProvidedDaysThunk,
  toggleTaskStatusThunk,
} from '../task/task.thunk';
import taskInitialState from './task.initial-state';

const taskSlice = createSlice({
  name: 'task',
  initialState: taskInitialState,

  extraReducers: {
    [getUserInfoThunk.fulfilled]: (state, { payload }) => {
      state.balance = payload.user.balance;
      state.rewardsGained = payload.week.rewardsGained;
      state.rewardsPlanned = payload.week.rewardsPlanned;
      state.tasks = payload.week.tasks;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.balance = payload.user.balance;
      state.rewardsGained = payload.week.rewardsGained;
      state.rewardsPlanned = payload.week.rewardsPlanned;
      state.tasks = payload.week.tasks;
    },
    [createTaskThunk.pending]: state => {
      state.isLoading = true;
    },
    [createTaskThunk.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.push(payload);
      state.isLoading = false;
    },
    [createTaskThunk.rejected]: state => {
      state.isLoading = false;
    },
    [addTaskToProvidedDaysThunk.pending]: state => {
      state.isLoading = true;
    },
    [addTaskToProvidedDaysThunk.fulfilled]: (state, { payload }) => {
      state.rewardsPlanned = payload.updatedWeekPlannedRewards;
      // eslint-disable-next-line array-callback-return
      state.tasks.map((task, idx) => {
        if (task._id === payload.updatedTask.id) {
          state.tasks[idx].days = payload.updatedTask.days;
        }
      });
      state.isLoading = false;
    },
    [addTaskToProvidedDaysThunk.rejected]: state => {
      state.isLoading = false;
    },
    [toggleTaskStatusThunk.pending]: state => {
      state.isLoading = true;
    },
    [toggleTaskStatusThunk.fulfilled]: (state, { payload }) => {
      state.balance = payload.updatedBalance;
      state.rewardsGained = payload.updatedWeekGainedRewards;
      // eslint-disable-next-line array-callback-return
      state.tasks.map((task, idx) => {
        if (task._id === payload.updatedTask.id) {
          state.tasks[idx].days = payload.updatedTask.days;
        }
      });
      state.isLoading = false;
    },
    [toggleTaskStatusThunk.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const taskReducer = taskSlice.reducer;
