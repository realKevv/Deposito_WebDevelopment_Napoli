import React from 'react';

export default function GetPosts({ listaPost }) {
    return (
        <div>
            <h2> I POST RECUPERATI IN JSON </h2>
            <ul>
                {listaPost.map((post) => (
                    <li key={post.id}>
                        <strong>{post.id}: </strong>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}