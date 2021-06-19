import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const POST = '/posts';

export const getPost = async () => {
  const response = await api.get(POST);

  return response;
};

export const addPost = async ({ title, content }: { title: string; content: string }) => {
  await api.post(POST, { title, content });
};
