import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from '../../domain/Post';

export const fetchPosts = async () =>
  await axios.get<Post[]>('/api/posts').then((res) => res.data);

export const useFetchPosts = () => useQuery(['posts'], fetchPosts);
