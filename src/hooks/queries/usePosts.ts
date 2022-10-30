import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchPosts = async () =>
  await axios.get('/api/posts').then((res) => res.data);

export const useFetchPosts = () => useQuery(['posts'], fetchPosts);
