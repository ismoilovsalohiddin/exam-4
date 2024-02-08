import { useLogin } from 'api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useLoginProps = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();

  const login = useLogin();

  const onSubmit = (data) => {
    console.log(data);
    login.mutate(data);
  };

  return {
    handleClick,
    show,
    register,
    handleSubmit,
    onSubmit,
  };
};
