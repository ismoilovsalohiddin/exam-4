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
        alert("You have registrated");
        authStore.userData = res.data;
      }else{
        alert("Something is wrong❗ Try again")
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
