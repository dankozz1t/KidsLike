import { privateApi } from './http/http';

export const createTaskService = async body => {
  return await privateApi.get('/task', body);
};

export const addTaskToProvidedDaysService = async body => {
  return await privateApi.get('/task/single-active', body);
};

export const toggleTaskStatusService = async body => {
  return await privateApi.get('/task/switch', body);
};