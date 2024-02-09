import { useMutation } from 'react-query';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';

const authServices = {
  login: (data) => {
    request.post('/auth/login', data).then((res) => {
      if (res?.status === 200) {
        authStore.login();
        authStore.userData = res.data;
      }
    });
  },
  register: (data) => {
    request.post('/auth/register', data).then((res) => {
      if (res?.status === 201) {
        alert('You have registrated');
        authStore.userData = res.data;
      } else {
        alert('Something is wrong❗ Try again');
      }
    });
  },
  hasPermission: (user_id) => {
    request.patch(`/auth/grant-permission/${user_id}`).then((res) => res?.data);
  },
};

export const useLogin = () => {
  return useMutation('LOGIN', (data) => authServices.login(data));
};

export const useRegister = () => {
  return useMutation('REGISTER', (data) => authServices.register(data));
};

export const useGivePermission = () => {
  return useMutation('PATCH/GIVE_PERMISSION', (user_id) => authServices.hasPermission(user_id));
};

// request.interceptors.request.use(config => {
//   config.headers['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjZjNTFkLTgyNDYtNGQ2Ny05YjliLTE3ZTVlY2M0NzYyYyIsInVzZXJfaWQiOiIxZmY5NzQ0Yy01ZjhhLTRkZDctYjIxNC00OWYwNDU5MTEwNmQiLCJsb2dpbl9uYW1lIjoiYWRtaW4iLCJ1c2VyX3R5cGUiOiJhZG1pbiIsImlzc3VlZF9hdCI6IjIwMjQtMDItMDhUMTA6NDk6MTEuNjIwMzk4MzE5WiIsImV4cGlyZWRfYXQiOiIyMDI0LTAyLTA5VDEwOjQ5OjExLjYyMDM5OTcwOFoifQ.kYCSbFQKzY6SpOCPA73R8LE3s5G5qR9wOQnjuZ4L2i4";
// })
