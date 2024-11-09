// src/pages/ViewGallery.js
import React, { useEffect, useState } from 'react';
import './ViewGallery.css';

const ViewGallery = () => {
  const [catImages, setCatImages] = useState([]);
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    // Fetch cat images
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => setCatImages(data))
      .catch(error => console.error('Error fetching cat images:', error));

    // Fetch dog images
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => setDogImages(data))
      .catch(error => console.error('Error fetching dog images:', error));
  }, []);

  return (
    <div className='gallery-container'>
      <h2>Social Media For Our Adorable Cats and Dogs</h2>
      <div className='image-grid'>
        {catImages.map((cat, index) => (
          <img key={`cat-${index}`} src={cat.url} alt='Cat' className='animal-image' />
        ))}
        {dogImages.map((dog, index) => (
          <img key={`dog-${index}`} src={dog.url} alt='Dog' className='animal-image' />
        ))}
      </div>
    </div>
  );
};

export default ViewGallery;
