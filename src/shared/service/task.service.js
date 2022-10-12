import { privateApi } from './http/http';

export const createTaskService = async body => {
  return await privateApi.post('/task', body);
};

export const addTaskToProvidedDaysService = async body => {
  return await privateApi.patch('/task/single-active', body);
};

export const toggleTaskStatusService = async body => {
  return await privateApi.patch('/task/switch', body);
};