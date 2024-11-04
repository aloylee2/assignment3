// src/AdoptAnimalForm.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AdoptAnimalForm.css';

const AdoptAnimalForm = ({ isLoggedIn, loggedInUsername }) => {
    const query = new URLSearchParams(useLocation().search);
    const animalType = query.get('type') || 'dog';
    const animalImage = query.get('image');
    const breedName = query.get('breed');
    const weight = query.get('weight');
    const height = query.get('height');
    const bredFor = query.get('bredFor');
    const lifeSpan = query.get('lifeSpan');
    const temperament = query.get('temperament');
    const navigate = useNavigate();

    const handleAdoptClick = () => {
        console.log("User logged in status:", isLoggedIn); // Debugging line
        if (!isLoggedIn) {
            alert("Not logged in. Unable to adopt.");
            navigate('/login')
        } else {
            navigate('/adoption-form', {
                state: {
                    animalType,
                    animalImage,
                    breedName,
                    loggedInUsername,
                },
            });
        }
    };

    return (
        <div className="adopt-animal-container">
            <h2 className="adopt-animal-title">Adopt a {animalType.charAt(0).toUpperCase() + animalType.slice(1)}</h2>
            <div className="animal-image-container">
                {animalImage ? (
                    <img src={animalImage} alt={breedName} className="animal-image" />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="animal-details">
                <p><strong>Breed:</strong> {breedName || 'Unknown'}</p>
                <p><strong>Weight:</strong> {weight || 'Unknown'} lbs</p>
                <p><strong>Height:</strong> {height || 'Unknown'} inches</p>
                <p><strong>Bred For:</strong> {bredFor || 'Unknown'}</p>
                <p><strong>Life Span:</strong> {lifeSpan || 'Unknown'}</p>
                <p><strong>Temperament:</strong> {temperament || 'Unknown'}</p>
            </div>
            <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
        </div>
    );
};

export default AdoptAnimalForm;
