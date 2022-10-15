import { privateApi } from './http/http';

export const getGiftsService = async () => {
  return await privateApi.get('/gift');
};

export const buyGiftsService = async body => {
  return await privateApi.patch('/gift', body);
};
