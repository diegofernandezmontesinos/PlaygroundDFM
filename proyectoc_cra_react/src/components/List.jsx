import React, { useState, useEffect } from 'react';
import './List.css';

function Lists() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando posts...</p>;
    }

    return (
        <div>
            <h2>Lista de Posts</h2>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lists;
