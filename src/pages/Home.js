// src/pages/Home.js
import React from 'react';
import './Home.css';
import Counter from '../components/Counter';
import Button from '../components/Button';
import heroBanner from '../images/hero_banner.jpg'; // Ensure the path is correct

const Home = ({ isLoggedIn }) => {
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
              className='join_us_button'
            />
          )}
        </div>
      </div>
      <div className='adopt_method'>
     
      </div>
      <Counter />
    </div>
  );
};

export default Home;
