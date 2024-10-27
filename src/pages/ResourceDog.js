import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resource from './Resource' // Ensure this is the correct path

const ShowDog = () => {
    const navigate = useNavigate();
    const webURL = 'https://dog.ceo/api/breeds/image/random/12';

    const render = (data) => {
        if (data.loading) return <p>Loading...</p>;
        if (data.error) return <p>Error: {data.error}</p>;

        return data.trans.message.map((dogUrl, index) => (
            <div key={index} className='dog-container'>
                <img 
                    className='image' 
                    src={dogUrl} 
                    alt='dog img' 
                    onClick={() => navigate(`/adoptdog?image=${encodeURIComponent(dogUrl)}`)} 
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

export default ShowDog;
