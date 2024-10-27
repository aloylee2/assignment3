import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const DogForm = () => {
    const query = new URLSearchParams(useLocation().search);
    const dogImage = query.get('image');
    const breedName = query.get('breed');

    // State for the message input and dog facts
    const [message, setMessage] = useState('');
    const [facts, setFacts] = useState([]);
    const [loadingFacts, setLoadingFacts] = useState(true);
    const [error, setError] = useState(null);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!', { message, dogImage, breedName });
        // Add logic to send the message, image, and breed, if necessary
    };

    const fetchDogFacts = async (count = 5) => { // Change count as needed
        try {
            const response = await axios.get(`https://dog-api.kinduff.com/api/facts?number=${count}`);
            setFacts(response.data.facts);
            setLoadingFacts(false);
        } catch (err) {
            setError('Error fetching dog facts');
            setLoadingFacts(false);
        }
    };

    useEffect(() => {
        fetchDogFacts();
    }, []);

    if (!dogImage) {
        return <p>No dog image available.</p>; // Handle case where there's no image
    }

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
                    <label>Breed Name:</label>
                    <p>{breedName.charAt(0).toUpperCase() + breedName.slice(1).replace('-', ' ')}</p>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        placeholder="Write a message..." 
                        required 
                        value={message} 
                        onChange={handleMessageChange} 
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            <div>
                <h3>Random Dog Facts</h3>
                {loadingFacts ? (
                    <p>Loading facts...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <ul>
                        {facts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DogForm;
