import Resource from './Resource';
import { useNavigate } from 'react-router-dom';

const ShowCat = () => {
  const API_KEY = 'live_8kDRkKIA0PLZz2JMNvjE1LHQakFW8eWnPVx5olD2EhHIEEpMJw6AuDh5HpqmLnJS';
  const webURL = `https://api.thecatapi.com/v1/images/search?limit=50&has_breeds=1&api_key=${API_KEY}`;
  const navigate = useNavigate();

  const render = (data) => {
        if (data.loading) return <p>Loading...</p>;
        if (data.error) return <p>Error loading data</p>;

        return data.trans
            .filter(cat => cat.breeds && cat.breeds.length > 0 && cat.url)
            .slice(0, 13)
            .map(cat => {
              const breed = cat.breeds[0];
              const weight = breed.weight.imperial;  // Extracting weight
              const lifeSpan = breed.life_span;      // Life span
              const temperament = breed.temperament; // Temperament
             
                const handleImageClick = () => {
                    const url = `/adopt-animal?type=cat&image=${encodeURIComponent(cat.url)}&breed=${encodeURIComponent(breed.name)}&weight=${encodeURIComponent(weight)}&lifeSpan=${encodeURIComponent(lifeSpan)}&temperament=${encodeURIComponent(temperament)}`;
                    navigate(url);
                };
                

                return (
                    <div key={cat.id} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                    <div className="cat_card">
                      <img className="cat_image" src={cat.url} alt={breed.name || 'cat Image'} />
                      <h2 className="breed-name">Breed Type: {breed.name || 'Unknown Breed'}</h2>
                      <p className="breed-temperament">Temperament: {breed.temperament || 'Unknown temperament'}</p>
                    </div>
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

export  default ShowCat;