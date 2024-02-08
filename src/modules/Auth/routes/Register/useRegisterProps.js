import { useRegister } from "api";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useRegisterProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();
  const registration = useRegister()
  const onSubmit = (data) => {
    registration.mutate(data)
  };

  return {
    handleClick,
    show,
    register,
    handleSubmit,
    onSubmit
  };
};
