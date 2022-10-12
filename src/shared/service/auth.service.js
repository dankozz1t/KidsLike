import { publicApi, privateApi } from './http/http';

export const getUserService = async (token) => {
  return await privateApi.get('/user/info', {headers: {Authorization: `Bearer ${token}`}} );
};

export const createUserService = async body => {
  return await publicApi.post('/auth/register', body);

};

export const loginUserService = async body => {
  return await publicApi.post('/auth/login', body);
};
