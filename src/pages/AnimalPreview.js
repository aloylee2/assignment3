import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimalPreview.css'

const AnimalPreview = ({ limit = 4 }) => {
  const catAPIKey = 'live_8kDRkKIA0PLZz2JMNvjE1LHQakFW8eWnPVx5olD2EhHIEEpMJw6AuDh5HpqmLnJS'; // Cat API key
  const dogAPIKey = 'live_XHTGZfx3FBiaEZ89gg6BxbZEiVho8EKg1Wsk9I9TMy3Y3Q1FZ1PJw0T8O0GN8MBE'; // Dog API key
  const catURL = `https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=1&api_key=${catAPIKey}`;
  const dogURL = `https://api.thedogapi.com/v1/images/search?limit=${limit}&has_breeds=1&api_key=${dogAPIKey}`;
  const navigate = useNavigate();
  
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(catURL);
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    const fetchDogs = async () => {
      try {
        const response = await fetch(dogURL);
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Error fetching dogs:', error);
      }
    };

    fetchCats();
    fetchDogs();
  }, [catURL, dogURL]);

  const handleCatClick = (cat) => {
    const breed = cat.breeds[0];
    const weight = breed.weight.imperial;
    const lifeSpan = breed.life_span;
    const temperament = breed.temperament;
    const url = `/adopt-animal?type=cat&image=${encodeURIComponent(cat.url)}&breed=${encodeURIComponent(breed.name)}&weight=${encodeURIComponent(weight)}&lifeSpan=${encodeURIComponent(lifeSpan)}&temperament=${encodeURIComponent(temperament)}`;
    navigate(url);
  };

  const handleDogClick = (dog) => {
    const breed = dog.breeds[0];
    const weight = breed.weight.imperial;
    const height = breed.height.imperial;
    const bredFor = breed.bred_for;
    const lifeSpan = breed.life_span;
    const temperament = breed.temperament;
    const url = `/adopt-animal?type=dog&image=${encodeURIComponent(dog.url)}&breed=${encodeURIComponent(breed.name)}&weight=${encodeURIComponent(weight)}&height=${encodeURIComponent(height)}&bredFor=${encodeURIComponent(bredFor)}&lifeSpan=${encodeURIComponent(lifeSpan)}&temperament=${encodeURIComponent(temperament)}`;
    navigate(url);
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Animals to adopt</h1>
      <div className="animal-previews">
        {cats.map((cat) => {
          const breed = cat.breeds[0];
          return (
            <div key={cat.id} onClick={() => handleCatClick(cat)} style={{ cursor: 'pointer' }}>
              <div className="animal-card">
                <img className="animal-image" src={cat.url} alt={breed.name || 'Cat'} />
                <h3>{breed.name || 'Unknown Breed'}</h3>
                <p>{breed.temperament || 'Unknown temperament'}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="animal-previews">
        {dogs.map((dog) => {
          const breed = dog.breeds[0];
          return (
            <div key={dog.id} onClick={() => handleDogClick(dog)} style={{ cursor: 'pointer' }}>
              <div className="animal-card">
                <img className="animal-image" src={dog.url} alt={breed.name || 'Dog'} />
                <h3>{breed.name || 'Unknown Breed'}</h3>
                <p>{breed.temperament || 'Unknown temperament'}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimalPreview;
