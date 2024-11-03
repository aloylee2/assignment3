import React from 'react';
import { useLocation } from 'react-router-dom';

const AdoptAnimalForm = () => {
    const query = new URLSearchParams(useLocation().search);
    const animalType = query.get('type') || 'dog';
    const animalImage = query.get('image');
    const breedName = query.get('breed');
    const weight = query.get('weight');
    const height = query.get('height');
    const bredFor = query.get('bredFor');
    const lifeSpan = query.get('lifeSpan');
    const temperament = query.get('temperament');

    return (
        <div>
            <h2>Adopt a {animalType.charAt(0).toUpperCase() + animalType.slice(1)}</h2>
            <div>
                {animalImage ? (
                    <img src={animalImage} alt={breedName} style={{ width: '200px', height: 'auto' }} />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div>
                <p><strong>Breed:</strong> {breedName}</p>
                <p><strong>Weight:</strong> {weight} lbs</p>
                <p><strong>Height:</strong> {height} inches</p>
                <p><strong>Bred For:</strong> {bredFor}</p>
                <p><strong>Life Span:</strong> {lifeSpan}</p>
                <p><strong>Temperament:</strong> {temperament}</p>
            </div>
        </div>
    );
};

export default AdoptAnimalForm;
