// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';
import Counter from '../components/Counter';
import Button from '../components/Button';
import heroBanner from '../images/hero_banner.jpg'; 
import gallery from '../images/dog_gallery.avif';
import YouTubeVideo from '../components/Video';
import FeedbackSlideshow from './Feedback';



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
          <p>Thank you for your interest in adopting an animal! All visits will not be allowed and we will contact you instead throught email. Thanks for underatanding.
            Click the button above to see our pets in action.
          </p>
              <Button
              label='View Gallery'
              onClick={() => (window.location.href = '/view_gallery')}
              className='gallery_button'
            />
     </div>
      </div>
      <div className='container_dropdown' style={{ width: '90%' }}>
        <div className='header_drop' onClick={toggleDropdown1}>
          <h3>More Information on adoption</h3>
        </div>
        {isDropdownOpen1 && (
          <div className='dropdown_content'>
            <p><strong>Step 1:</strong>Find a pet: Browse a shelter or adoption center's website fill up the form.</p>
            <p><strong>Step 2:</strong>Schedule a meeting: The organization will contact you to schedule a meeting with the pet.</p>
            <p><strong>Step 3:</strong>Sign the adoption form: If you and the pet are a good fit, you'll sign the adoption form.</p>
            <p><strong>Step 4:</strong>Check in: The shelter or adoption center will likely check in with you periodically to ensure the pet is settling in well. 
            </p>
          </div>
        )}
      </div>
      <div className='container_dropdown' style={{ width: '90%' }}>
        <div className='header_drop' onClick={toggleDropdown2}>
          <h3>More Information on volunteering</h3>
        </div>
        {isDropdownOpen2 && (
          <div className='dropdown_content'>
            <p>Infomation on being a volunteer....</p>
          </div>
        )}
      </div>
      <div className='counter'>
      <Counter />
      </div>
     
      <div className='youtube_video'>
      <YouTubeVideo />
      </div>
      <div className='feedback'>
        <h3 style={{textAlign:'center'
        }}>Adoption Feedback</h3>
        <FeedbackSlideshow/>
      </div>
     
    </div>
  );
};

export default Home;
