import { useMutation, useQuery } from 'react-query';
import request from 'services/httpRequest';

const testsServices = {
  getTests: () => request.get('/tests').then((res) => res?.data?.data),
  createTest: () => request.post('/tests').then((res) => res?.data),
  GetTestById: (test_id) => request.get(`/tests/${test_id}`).then((res) => res?.data?.data),
};

export const useGetTests = () => {
  return useQuery('GET/TESTS', testsServices.getTests);
};

export const useCreatTest = () => {
  return useMutation('POST/TEST', testsServices.createTest);
};

export const useGetTestById = (test_id) => {
  return useQuery('GET/TEST/ID', () => testsServices.GetTestById(test_id));
}

// request.interceptors.request.use(config => {
//   config.headers['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjZjNTFkLTgyNDYtNGQ2Ny05YjliLTE3ZTVlY2M0NzYyYyIsInVzZXJfaWQiOiIxZmY5NzQ0Yy01ZjhhLTRkZDctYjIxNC00OWYwNDU5MTEwNmQiLCJsb2dpbl9uYW1lIjoiYWRtaW4iLCJ1c2VyX3R5cGUiOiJhZG1pbiIsImlzc3VlZF9hdCI6IjIwMjQtMDItMDhUMTA6NDk6MTEuNjIwMzk4MzE5WiIsImV4cGlyZWRfYXQiOiIyMDI0LTAyLTA5VDEwOjQ5OjExLjYyMDM5OTcwOFoifQ.kYCSbFQKzY6SpOCPA73R8LE3s5G5qR9wOQnjuZ4L2i4";
// })
