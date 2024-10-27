import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resource from './Resource';

const ShowCat = () => {
    const navigate = useNavigate();
    const webURL = 'https://api.thecatapi.com/v1/images/search?include_breeds=true&limit=15';

    const render = (data) => {
        if (data.loading) {
            return <p className="loading">Loading...</p>;
        }
        if (data.error) {
            return <p className="error">Error: {data.error}</p>;
        }

        return data.trans.map(cat => (
            <div key={cat.id} className='cat-container'>
                <img 
                    className='image' 
                    src={cat.url} 
                    alt={`A cute ${cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'unknown breed'} cat`} 
                    onClick={() => {
                        const breedName = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Unknown';
                        navigate(`/adoptcat?image=${encodeURIComponent(cat.url)}&breed=${encodeURIComponent(breedName)}`);
                    }} 
                />
                <p>Breed: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Unknown'}</p>
            </div>
        ));
    };

    return (
        <div>
            <Resource path={webURL} render={render} />
        </div>
    );
};

export default ShowCat;
