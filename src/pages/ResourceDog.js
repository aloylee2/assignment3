import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resource from './Resource';

const ShowDog = () => {
    const API_KEY = 'live_XHTGZfx3FBiaEZ89gg6BxbZEiVho8EKg1Wsk9I9TMy3Y3Q1FZ1PJw0T8O0GN8MBE'; // Dog API key
    const webURL = `https://api.thedogapi.com/v1/images/search?limit=20&api_key=${API_KEY}`;
    const navigate = useNavigate();

    const render = (data) => {
        if (data.loading) return <p>Loading...</p>;
        if (data.error) return <p>Error loading data</p>;

        return data.trans
            .filter(dog => dog.breeds && dog.breeds.length > 0 && dog.url)
            .slice(0, 15)
            .map(dog => {
                const breed = dog.breeds[0];
                const weight = breed.weight.imperial;
                const height = breed.height.imperial;
                const bredFor = breed.bred_for;
                const lifeSpan = breed.life_span;
                const temperament = breed.temperament;

                const handleImageClick = () => {
                    const url = `/adopt-animal?type=dog&image=${encodeURIComponent(dog.url)}&breed=${encodeURIComponent(breed.name)}&weight=${encodeURIComponent(weight)}&height=${encodeURIComponent(height)}&bredFor=${encodeURIComponent(bredFor)}&lifeSpan=${encodeURIComponent(lifeSpan)}&temperament=${encodeURIComponent(temperament)}`;
                    navigate(url);
                };
                

                return (
                    <div key={dog.id} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                        <img className="image" src={dog.url} alt={breed.name || 'Dog Image'} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        <h2 className="breed-name">Breed Type: {breed.name || 'Unknown Breed'}</h2>
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
