import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createTaskService,
  addTaskToProvidedDaysService,
  toggleTaskStatusService,
} from 'shared/service/task.service';

export const createTaskThunk = createAsyncThunk(
  'task/create',
  async (body, { rejectWithValue }) => {
    try {
      const resp = await createTaskService(body);
      const { title, reward, imageUrl, id, days } = resp;
      return { title, reward, imageUrl, _id: id, days };
    } catch (e) {
      return rejectWithValue();
    }
  }
);

export const addTaskToProvidedDaysThunk = createAsyncThunk(
  'task/addToProvided',
  async (body, { rejectWithValue }) => {
    try {
      const data = await addTaskToProvidedDaysService(body);
      return data;
    } catch (e) {
      return rejectWithValue();
    }
  }
);

export const toggleTaskStatusThunk = createAsyncThunk(
  'task/toggleStatus',
  async (body, { rejectWithValue, getState }) => {
    try {
      const response = await toggleTaskStatusService(body.id, body.body);

      const tasks = getState().task.tasks;

      const data = tasks.reduce((acc, task) => {
        if (task._id === response.data.updatedTask.id) {
          const changedTask = { ...task };

          changedTask.days = response.data.updatedTask.days;
          return [...acc, changedTask];
        }

        return [...acc, task];
      }, []);

      return {
        data,
        updatedBalance: response.updatedBalance,
        updatedWeekGainedRewards: response.updatedWeekGainedRewards,
      };
    } catch (e) {
      return rejectWithValue();
    }
  }
);
