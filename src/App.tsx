import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import './App.css';

const App: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(result.data);

      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-primary mb-3">My Blog</div>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
