// src/AdoptionForm.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const AdoptionForm = () => {
    const location = useLocation();
    const { animalType, animalImage, breedName, loggedInUsername } = location.state || {};

    return (
        <div className="adoption-form-container">
            <h2>Adoption Form</h2>
            <h3>Thank you for adopting a {animalType}</h3>
            <div className="animal-image-container">
                {animalImage ? (
                    <img src={animalImage} alt={breedName} className="animal-image" />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="adoption-details">
                <p><strong>Breed:</strong> {breedName || 'Unknown'}</p>
                <p><strong>Adopter's Username:</strong> {loggedInUsername || 'Guest'}</p>
            </div>
            <form className="form">
                <label>
                    Your Name:
                    <input type="text" placeholder="Enter your name" required />
                </label>
                <label>
                    Your Address:
                    <input type="text" placeholder="Enter your address" required />
                </label>
                <label>
                    Contact Number:
                    <input type="tel" placeholder="Enter your contact number" required />
                </label>
                <button type="submit">Submit Adoption</button>
            </form>
        </div>
    );
};

export default AdoptionForm;
