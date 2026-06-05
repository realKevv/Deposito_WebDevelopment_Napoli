import React, { useState } from 'react';
import axios from 'axios';

export default function DeletePost({ postId, onCancellazioneSuccesso }) {
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setMessage(`post ${postId} eliminato`);
            
            if (onCancellazioneSuccesso) {
                onCancellazioneSuccesso(postId);
            }
        } catch (error) {
            console.error('Errore durante l\'eliminazione del post:', error);
            setMessage('Si è verificato un errore durante l\'eliminazione del post.');
        }   
    };

    return (
        <div>
            <h2>Elimina Post (DELETE)</h2>
            <p>ID Post bersaglio: {postId}</p>
            
            <button onClick={handleDelete}>Elimina Post</button>
            
            {message && <p style={{ fontWeight: 'bold', color: 'red' }}>{message}</p>}
        </div>
    );
}