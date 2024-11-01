import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowCat = () => {
    const navigate = useNavigate();
    const [catImages, setCatImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const limit = 50; // Request more than needed to increase chances of getting images with breeds
    const apiKey = 'live_8kDRkKIA0PLZz2JMNvjE1LHQakFW8eWnPVx5olD2EhHIEEpMJw6AuDh5HpqmLnJS';

    const fetchCatImages = async () => {
        try {
            let imagesWithBreeds = [];
            const webURL = `https://api.thecatapi.com/v1/images/search?include_breeds=true&limit=${limit}`;

            while (imagesWithBreeds.length < 10) {
                const response = await fetch(webURL, {
                    headers: {
                        'x-api-key': apiKey 
                    }
                });
                
                if (!response.ok) throw new Error("Failed to fetch images");

                const data = await response.json();
                const filteredCats = data.filter(cat => cat.breeds && cat.breeds.length > 0);

                // Use concat instead of spread operator
                imagesWithBreeds = imagesWithBreeds.concat(filteredCats).slice(0, 10); // Limit to exactly 10 images with breeds
            }

            setCatImages(imagesWithBreeds);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatImages();
    }, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div>
            {catImages.map(cat => {
                const breedName = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Unknown';
                const weightImperial = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].weight.imperial : 'Unknown';
                const weightMetric = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].weight.metric : 'Unknown';
                const temperament = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].temperament : 'Unknown';
                const lifespan = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].life_span : 'Unknown';

                return (

                    <div key={cat.id} className='cat-container'>
                        <div className='cat-card'>
                        <img 
                            className='image' 
                            src={cat.url} 
                            alt={`A cute ${breedName} cat`} 
                            onClick={() => {
                                navigate(`/adoptcat?image=${encodeURIComponent(cat.url)}&breed=${encodeURIComponent(breedName)}&lifespan=${encodeURIComponent(lifespan)}&weightImperial=${encodeURIComponent(weightImperial)}&weightMetric=${encodeURIComponent(weightMetric)}&temperament=${encodeURIComponent(temperament)}`); 
                            }} 
                        />
                        <p>Breed: {breedName}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShowCat;
