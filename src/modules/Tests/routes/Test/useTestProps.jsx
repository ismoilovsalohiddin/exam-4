import { useGetTestById } from 'api';
import { useParams } from 'react-router-dom';
const useTestProps = () => {
  const { id } = useParams();

  const singleTest = useGetTestById(id).data;
  console.log(singleTest);

  return{ singleTest }
};

export default useTestProps
