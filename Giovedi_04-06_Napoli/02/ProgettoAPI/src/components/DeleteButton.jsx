import React, { useState } from 'react';
import axios from 'axios';

export default function DeletePost({ postId, onCancellazioneSuccesso }) {
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            
            // Imposta il messaggio di successo temporaneo
            setMessage(`post ${postId} eliminato`);
            
            setTimeout(() => {
                if (onCancellazioneSuccesso) {
                    onCancellazioneSuccesso(postId);
                }
            }, 800);

        } catch (error) {
            console.error('Errore durante l\'eliminazione:', error);
            setMessage('Errore!');
        }   
    };

    return (
        <span style={{ display: 'inline-block' }}>
            <button 
                onClick={handleDelete} 
                style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '4px 10px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
            >
                Elimina Post
            </button>
            
            {message && <span style={{ color: 'red', marginLeft: '10px', fontWeight: 'bold' }}>{message}</span>}
        </span>
    );
}