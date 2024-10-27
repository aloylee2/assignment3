import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resource from './Resource'; // Ensure this is the correct path

const ShowDog = () => {
    const navigate = useNavigate();
    const webURL = 'https://dog.ceo/api/breeds/image/random/12';

    const render = ({ loading, error, trans }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return trans.message.map((dogUrl) => {
            // Extract breed name from the URL
            const breedName = dogUrl.split('/')[4]; // Adjust based on the actual URL structure

            return (
                <div key={dogUrl} className='dog-container'>
                    <img 
                        className='image' 
                        src={dogUrl} 
                        alt={`A cute ${breedName}`} 
                        onClick={() => navigate(`/adoptdog?image=${encodeURIComponent(dogUrl)}&breed=${encodeURIComponent(breedName)}`)} 
                    />
                    <p className='breed-name'>{breedName.charAt(0).toUpperCase() + breedName.slice(1).replace('-', ' ')}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <Resource path={webURL} render={render} />
        </div>
    );
};

export default ShowDog;
