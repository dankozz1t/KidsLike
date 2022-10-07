import { publicApi } from '../../components/http/http';

export const createUserService = body => {
  return publicApi.post('/auth/register', body);
};

export const loginUserService = async body => {
  const { data } = await publicApi.post('/auth/login', body);
  return data;
};
