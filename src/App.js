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
import ViewGallery from './pages/ViewGallery';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import ReleasePet from './pages/ReleasePet';
import Donation from './pages/Donation';



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
      
        <Routes>
          <Route path="/cat" element={<ShowCat />} />
          <Route path="/dog" element={<ShowDog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Home username={username} />} />  {/* Pass username to Home */}
          <Route path="/adopt-animal" element={<AdoptAnimalForm isLoggedIn={loggedIn} loggedInUsername={username} />}/> 
          <Route path="/adoption-form" element={<AdoptionForm />} />
          <Route path="/view_gallery" element={<ViewGallery />} />
          <Route path="/Contact" element={<ContactUs/>}/>
          <Route path="/release_pet" element={<ReleasePet/>}/>
          <Route path="/Donate" element={<Donation/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;



