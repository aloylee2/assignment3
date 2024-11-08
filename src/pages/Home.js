// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';
import Counter from '../components/Counter';
import Button from '../components/Button';
import heroBanner from '../images/hero_banner.jpg'; // Ensure the path is correct
import gallery from '../images/dog_gallery.avif';
import YouTubeVideo from '../components/Video';


const Home = ({ isLoggedIn }) => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  return (
    <div>
      <div className='hero_image'>
        <img src={heroBanner} alt='Hero Banner' className='hero_banner_image' />
        <div className='hero_text'>
          <h2>Welcome to Pet Heaven Society</h2>
          <p>Your support helps us save pets.</p>
          {!isLoggedIn && (
            <Button
              label='Join Us'
              onClick={() => (window.location.href = '/register')}
              className='about_button'
            />
          )}
           <Button
              label='Learn More'
              onClick={() => (window.location.href = '/About')}
              className='join_us_button'
            />
        </div>
      </div>
      <div className='adopt_gallery'>
  
     <div className='dog_image_gallery'>
      <img src={gallery} alt=' Gallery' className='dog_image'/>
     </div>
     <div className='gallery_text'>
      <h2>Gallery Pets</h2>
          <p>Thank you for your interest in adopting an animal! All visits are now by appointment only and slots will only be released 7 days beforehand. Book an appointment here.

              If you are looking for a missing pet, please visit our lost & found page.</p>
              <Button
              label='View Gallery'
              onClick={() => (window.location.href = '/view_gallery')}
              className='gallery_button'
            />
     </div>
     
      </div>
      <div className='container_dropdown' style={{ width: '90%' }}>
        <div className='header_drop' onClick={toggleDropdown1}>
          <h3>More Information</h3>
        </div>
        {isDropdownOpen1 && (
          <div className="dropdown_content">
            <p>Here is some additional information that expands when the header is clicked. You can customize this content as needed.</p>
          </div>
        )}
      </div>
      <div className="container_dropdown" style={{ width: '90%' }}>
        <div className="header_drop" onClick={toggleDropdown2}>
          <h3>More Information</h3>
        </div>
        {isDropdownOpen2 && (
          <div className="dropdown_content">
            <p>Here is some additional information that expands when the header is clicked. You can customize this content as needed.</p>
          </div>
        )}
      </div>
      <div className='counter'>
      <Counter />
      </div>
     
      <div className='youtube_video'>
      <YouTubeVideo />
      </div>
     
    </div>
  );
};

export default Home;
