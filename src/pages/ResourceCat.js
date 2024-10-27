import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resource from './Resource';

const ShowCat = () => {
    const navigate = useNavigate();
    const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC';

    const render = (data) => {
        if (data.loading) return <p>Loading...</p>;
        if (data.error) return <p>Error: {data.error}</p>;

        return data.trans.map(cat => (
            <div key={cat.id} className='cat-container'>
                <img 
                    className='image' 
                    src={cat.url} 
                    alt='A cute cat' 
                    onClick={() => navigate(`/adoptcat?image=${encodeURIComponent(cat.url)}`)} // Navigate to new page
                />
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
