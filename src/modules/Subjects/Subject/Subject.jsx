import { Button, FormControl, Input } from "@chakra-ui/react";
import { useSubjectsProps } from "./useSubjectProps";

export const Subject = () => {
  const {
    id,
    navigate,
    subject,
    handleSubmit,
    register,
    onSubmit,
  } = useSubjectsProps();

  return <div>
    <h1>Subject id: {id}</h1>
    <Button onClick={() => navigate(-1)}>Back</Button>
    <span>Created at:{subject?.created_at} </span>
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Title" {...register("title")} />
      <Button type="submit">Save</Button>
    </FormControl>
  </div>;
};
