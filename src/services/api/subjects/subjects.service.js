import { useMutation, useQuery } from 'react-query';
import request from 'services/httpRequest';

const subjectsServices = {
  getSubjects: () => request.get('/subjects').then((res) => res?.data?.data),
  deleteSubject: (subject_id) => request.delete(`subjects/${subject_id}`).then((res) => res?.data?.data),
  getSubjectById: (id) => request.get(`/subjects/${id}`).then(res => res?.data?.data),
  editSubject: (id) => request.put(`/subjects/${id}`).then(res => res?.data?.data)
};

export const useGetSubjects = () => {
  return useQuery({ queryKey: 'GET/SUBJECTS', queryFn: subjectsServices.getSubjects });
};

export const useDeleteSubjects = () => {
  return useMutation('DELETE/SUBJECTS', (subject_id) => subjectsServices.deleteSubject(subject_id));
};

export const useGetSubjectsById = (id) => {
  return useQuery("GET/SUBJECT/ID", () => subjectsServices.getSubjectById(id))
}

export const useEditSubject = (id) => {
  return useMutation("PUT/SUBJECT", () => subjectsServices.editSubject(id))
}

// request.interceptors.request.use(config => {
//   config.headers['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjZjNTFkLTgyNDYtNGQ2Ny05YjliLTE3ZTVlY2M0NzYyYyIsInVzZXJfaWQiOiIxZmY5NzQ0Yy01ZjhhLTRkZDctYjIxNC00OWYwNDU5MTEwNmQiLCJsb2dpbl9uYW1lIjoiYWRtaW4iLCJ1c2VyX3R5cGUiOiJhZG1pbiIsImlzc3VlZF9hdCI6IjIwMjQtMDItMDhUMTA6NDk6MTEuNjIwMzk4MzE5WiIsImV4cGlyZWRfYXQiOiIyMDI0LTAyLTA5VDEwOjQ5OjExLjYyMDM5OTcwOFoifQ.kYCSbFQKzY6SpOCPA73R8LE3s5G5qR9wOQnjuZ4L2i4";
// })