import { useEditSubject, useGetSubjectsById } from 'api';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const useSubjectsProps = () => {

  const { register, handleSubmit } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();
  const editSubject = useEditSubject(id)
  const onSubmit = (data) => {
    console.log(data);
    editSubject.mutate(data)
  }

  const { data: subject } = useGetSubjectsById(id);
  return {
    id,
    navigate,
    subject,
    register,
    handleSubmit,
    onSubmit,
  };
};
