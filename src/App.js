import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ShowCat from './pages/ResourceCat';
import ShowDog from './pages/ResourceDog';
import AdoptAnimalForm from './pages/AdoptAnimalForm';
import AdoptionForm from './pages/AdoptionForm';
import './App.css';



const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username); 
    localStorage.setItem('isLoggedIn', 'true'); // Persist login state
  };
  
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn'); // Remove login state on logout
  };

  return (
    <Router>
      <Navbar isLoggedIn={loggedIn} handleLogout={handleLogout} username={username} />
      <div className="container">
        <Routes>
          <Route path="/cat" element={<ShowCat />} />
          <Route path="/dog" element={<ShowDog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Home username={username} />} />  {/* Pass username to Home */}
          <Route path="/adopt-animal" element={<AdoptAnimalForm isLoggedIn={loggedIn} loggedInUsername={username} />}/> 
          <Route path="/adoption-form" element={<AdoptionForm />} />
        </Routes>
      </div>
      {/* footer */}
    </Router>
  );
};

export default App;
