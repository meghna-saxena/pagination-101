import React from 'react';

type Posts = {
    title: string;
    id: number;
}

interface IProps {
    posts: Posts[];
    loading: Boolean;
}

const Posts = ({ posts, loading }: IProps) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    const result = posts.map(post => (
        <li key={post.id} className="list-group-item">{post.title}</li>
    ))
    return (
        <ul className="list-group mb-4">
            {result}
        </ul>
    );
}

export default Posts;
