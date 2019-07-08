import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  console.log('post', posts);
  return (
    <div className="container">
      <h1>Pagination 101</h1>
    </div>
  );
}

export default App;
