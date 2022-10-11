import { privateApi } from './http/http';

export const fetchUserInfo = async () => {
  const {data} =  await privateApi.get('/user/info');
  return data;
}
