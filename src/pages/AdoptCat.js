import React from 'react';
import { useLocation } from 'react-router-dom';

const CatForm = () => {
    const query = new URLSearchParams(useLocation().search);
    const catImage = query.get('image');

    console.log('Cat Image URL:', catImage); // Debugging log

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <div>
            <h2>Send Cat Image</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Cat Image:</label>
                    <img 
                        src={catImage} 
                        alt="cat" 
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

export default CatForm;
