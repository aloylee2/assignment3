// src/pages/Home.js
import React from 'react';

const Home = ({ username }) => {
  return (
    <div>
      <h1>Welcome {username}!</h1>  {/* Display the welcome message */}
      <p>This is your home page.</p>
    </div>
  );
};

export default Home;
