import axios from 'axios';
import { authStore } from 'store/auth.store';

export const refreshToken = () => {
  request.post('/token/refresh', { refresh_token: authStore.token.refresh_token });
};
const request = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

const onError = (error) => {
  if (error.code === 401) {
    refreshToken();
  }
};

// const onRefreshError = (error) => {
//   if (error.code === 401) {
//     authStore.logout();
//   }
// };

const tokens = JSON.parse(localStorage.getItem('auth'));
console.log(tokens);
request.interceptors.response.use((response) => response, onError);

request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = tokens?.userData?.data?.tokens?.access_token
  return config;
});

export default request;
