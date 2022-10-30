import Layout from '../../components/Layout';
import Post from '../../components/Post';
import { useFetchPosts } from '../../hooks/queries/usePosts';

export default function Home() {
  const { data, isLoading } = useFetchPosts();

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data?.map((post) => <Post key={post.id} {...post} />)}
    </Layout>
  );
}
