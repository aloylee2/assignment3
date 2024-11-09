// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';
import Counter from '../components/Counter';
import Button from '../components/Button';
import heroBanner from '../images/hero_banner.jpg'; 
import gallery from '../images/dog_gallery.avif';
import YouTubeVideo from '../components/Video';
import FeedbackSlideshow from './Feedback';
import { useNavigate } from 'react-router-dom';



const Home = ({ isLoggedIn }) => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const navigate = useNavigate();

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
              onClick={() =>navigate('/register') }
              className='about_button'
            />
          )}
           <Button
              label='Learn More'
              onClick={() => navigate('/Mission')}
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
              onClick={() => navigate('/view_gallery')}
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
          <h3>More Information on Facilities</h3>
        </div>
        {isDropdownOpen2 && (
          <div className='dropdown_content'>
            <p><strong>Adoption Center:</strong> A safe and welcoming space where potential adopters can meet and interact with our animals to find their perfect match.</p>
            <p><strong>Animal Clinic:</strong> Our in-house veterinary clinic offers medical care, vaccinations, and spay/neuter services for all our rescued animals before they are adopted.</p>
            <p><strong>Foster Care Program:</strong> We partner with foster families to provide temporary homes for pets, giving them a chance to heal and socialize in a home environment before finding their forever homes.</p>
            <p><strong>Play Area:</strong> A dedicated space for exercise and socialization where our animals can play, relax, and enjoy the outdoors under supervised care.</p>
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
