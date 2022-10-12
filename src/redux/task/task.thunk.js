import { createAsyncThunk } from '@reduxjs/toolkit';
import { createTaskService, addTaskToProvidedDaysService, toggleTaskStatusService } from 'shared/service/task.service';

export const createTaskThunk = createAsyncThunk(
  'task/create', async (body, { rejectWithValue }) => {
    try {
      const resp = await createTaskService(body);
      const { title, reward, imageUrl, id, days } = resp;
      return { title, reward, imageUrl, _id: id, days };
    } catch (e) {
      return rejectWithValue();
    };
  }
);

export const addTaskToProvidedDaysThunk = createAsyncThunk(
  'task/addToProvided', async (body, { rejectWithValue }) => {
    try {
      const data = await addTaskToProvidedDaysService(body);
      return data;
    } catch (e) {
      return rejectWithValue();
    };
  }
);

export const toggleTaskStatusThunk = createAsyncThunk(
  'task/toggleStatus', async (body, { rejectWithValue }) => {
    try {
      const data = await toggleTaskStatusService(body);
      return data;
    } catch (e) {
      return rejectWithValue();
    };
  }
);