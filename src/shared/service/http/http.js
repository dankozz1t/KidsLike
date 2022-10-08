import axios from 'axios';


export const publicApi = axios.create({
  baseURL: 'https://kidslike-v1-backend.goit.global',
});

export const privateApi = axios.create({
  baseURL: 'https://kidslike-v1-backend.goit.global',
});


export const token = {
  set: value => {
    privateApi.defaults.headers.Authorization = value;
  },

  unset: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
