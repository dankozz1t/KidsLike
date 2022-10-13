import { privateApi } from './http/http';

export const createTaskService = async body => {
  return await privateApi.post('/task', body);
};

export const addTaskToProvidedDaysService = async (id, body) => {
  return await privateApi.patch(`/task/single-active/${id}`, body);
};

export const toggleTaskStatusService = async (id, body) => {
  return await privateApi.patch(`/task/switch/${id}`, body);
};
