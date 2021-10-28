import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';
import { IPosts } from '../interfaces/interfaces';

const Posts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        setPosts(data);
        setLoading(false);
      } catch (error) {}
    };

    fetchPosts();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
