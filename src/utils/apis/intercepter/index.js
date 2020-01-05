import Axios from 'axios';

Axios.interceptors.request.use(
  config => {
    // modifications here
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

Axios.interceptors.response.user(
  response => {
    // modifications here
    return response;
  },
  err => {
    // modifications here
    return Promise.reject(err);
  }
);
