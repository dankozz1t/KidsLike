import { publicApi, privateApi } from './http/http';

export const getUserService = () => {
  return privateApi.get('/user/info');
};

export const createUserService = body => {
  return publicApi.post('/auth/register', body);
};

export const loginUserService = async body => {
  return await publicApi.post('/auth/login', body);
};
