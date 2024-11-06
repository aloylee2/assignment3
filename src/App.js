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
        </Routes>
        <div className="container">
      </div>
      <Footer/>
    </Router>
  );
};

export default App;

// import React from 'react';
// import ReusableForm from './components/Form';

// const App = () => {
//   const contactFields = [
//     { name: 'name', label: 'Name', type: 'text', required: true },
//     { name: 'email', label: 'Email', type: 'email', required: true },
//     { name: 'message', label: 'Message', type: 'textarea', required: true },
//     { name: 'age', label: 'age', type: 'number', required: true },
//   ];

//   const handleContactSubmit = (data) => {
//     console.log('Contact Form Submitted:', data);
//     // Add logic to handle form submission, such as an API call
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <ReusableForm fields={contactFields} onSubmit={handleContactSubmit} />
//     </div>
//   );
// };

// export default App;

