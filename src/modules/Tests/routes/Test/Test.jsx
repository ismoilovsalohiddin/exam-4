import { Box, Checkbox, Heading } from '@chakra-ui/react';
import useTestProps from './useTestProps';

export const Test = () => {
  const { singleTest } = useTestProps();

  return (
    <Box>
      <img alt="" />
      <Heading fontSize="x-large">Test:{singleTest?.id}</Heading>
      <Heading>{singleTest?.subject?.title}</Heading>
      <Heading fontSize="md">Content:{singleTest?.question_content}</Heading>
      {singleTest?.options?.map((item) => {
        return (
          <Box key={item.id}>
            <Heading>{item?.content}</Heading>
            <Checkbox name='question_content'>Is current answer</Checkbox>
          </Box>
        );
      })}
    </Box>
  );
};
