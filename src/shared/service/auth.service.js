import { publicApi, privateApi } from './http/http';

export const getUserService = async () => {
  return await privateApi.get('/user/info');
};

export const createUserService = async body => {
  return await publicApi.post('/auth/register', body);

};

export const loginUserService = async body => {
  return await publicApi.post('/auth/login', body);
};
