import React from 'react';
import { useLocation } from 'react-router-dom';

const CatForm = () => {
    // Extract query parameters from the URL
    const query = new URLSearchParams(useLocation().search);
    const catImage = query.get('image');
    const catBreed = query.get('breed') || 'Unknown'; 

    // Extract additional parameters with defaults
    const catLifespan = query.get('lifespan') || 'Unknown'; 
    const catWeightImperial = query.get('weightImperial') || 'Unknown'; 
    const catWeightMetric = query.get('weightMetric') || 'Unknown'; 
    const catTemperament = query.get('temperament') || 'Unknown';

    // Debug logs for URL and breed
    console.log('Cat Image URL:', catImage);
    console.log('Cat Breed:', catBreed);
    console.log('Cat Lifespan:', catLifespan);
    console.log('Cat Weight (Imperial):', catWeightImperial);
    console.log('Cat Weight (Metric):', catWeightMetric);
    console.log('Cat Temperament:', catTemperament);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        // Additional submission logic can go here
    };

    return (
        <div>
            <h2>Send Cat Image</h2>
            <form onSubmit={handleSubmit}>
                {/* Display Cat Image and Breed */}
                <div>
                    <label>Cat Image:</label>
                    <img 
                        src={catImage} 
                        alt={`A cute ${catBreed} cat`} 
                        style={{ width: '200px', height: 'auto', display: 'block', margin: '10px 0' }} 
                    />
                    <p>Breed: {catBreed}</p> {/* Display breed or 'Unknown' */}
                    <p>Life span (Base on years): {catLifespan}</p> {/* Display age or 'Unknown' */}
                    <p>Weight (Imperial): {catWeightImperial}</p> {/* Display imperial weight or 'Unknown' */}
                    <p>Weight (Metric): {catWeightMetric}</p> {/* Display metric weight or 'Unknown' */}
                    <p>Temperament: {catTemperament}</p> {/* Display temperament or 'Unknown' */}
                </div>

                {/* Message Textarea */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        placeholder="Write a message..." 
                        required 
                        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" style={{ marginTop: '15px' }}>Send</button>
            </form>
        </div>
    );
};

export default CatForm;
