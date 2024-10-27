import React from 'react';
import { useLocation } from 'react-router-dom';

const DogForm = () => {
    const query = new URLSearchParams(useLocation().search);
    const dogImage = query.get('image');

    console.log('Dog Image URL:', dogImage); // Debugging log

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <div>
            <h2>Send Dog Image</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Dog Image:</label>
                    <img 
                        src={dogImage} 
                        alt="Dog" 
                        style={{ width: '200px', height: 'auto', display: 'block', margin: '10px 0' }} 
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea placeholder="Write a message..." required />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default DogForm;
