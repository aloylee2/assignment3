// src/pages/ViewGallery.js
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import './ViewGallery.css';

const ViewGallery = () => {
  const [catImages, setCatImages] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const catResponse = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const catData = await catResponse.json();
        setCatImages(catData);

        const dogResponse = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
        const dogData = await dogResponse.json();
        setDogImages(dogData);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
