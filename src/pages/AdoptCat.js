import React from 'react';
import { useLocation } from 'react-router-dom';

const CatForm = () => {
    const query = new URLSearchParams(useLocation().search);
    const catImage = query.get('image');
    const catBreed = query.get('breed') || 'Unknown'; // Default to 'Unknown' if no breed is provided

    console.log('Cat Image URL:', catImage); // Debugging log
    console.log('Cat Breed:', catBreed); // Debugging log

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        // Add your submission logic here
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
                    <p>Breed: {catBreed}</p> {/* Display the breed or 'Unknown' */}
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
