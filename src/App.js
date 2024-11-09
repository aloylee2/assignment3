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
import Volunteer from './pages/Volunteer';
import Mission_Purpose from './pages/Mission_Purpose';



const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username); 
    localStorage.setItem('isLoggedIn', 'true');
  };
  
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn'); 
  };

  return (
    <Router>
      <Navbar isLoggedIn={loggedIn} handleLogout={handleLogout} username={username} />
      
        <Routes>
          <Route path='/cat' element={<ShowCat />} />
          <Route path='/dog' element={<ShowDog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/assignment3' element={<Home isLoggedIn={loggedIn} username={username} />} />  {/* Pass username to Home */}
          <Route path='/' element={<Home isLoggedIn={loggedIn} username={username} />} />  {/* Pass username to Home */}
          <Route path='/adopt-animal' element={<AdoptAnimalForm isLoggedIn={loggedIn} loggedInUsername={username} />}/> 
          <Route path='/adoption-form' element={<AdoptionForm />} />
          <Route path='/view_gallery' element={<ViewGallery />} />
          <Route path='/Contact' element={<ContactUs/>}/>
          <Route path='/release_pet' element={<ReleasePet isLoggedIn={loggedIn} loggedInUsername={username}/>}/>
          <Route path='/Donate' element={<Donation isLoggedIn={loggedIn} loggedInUsername={username}/>}/>
          <Route path='/Volunteer' element={<Volunteer isLoggedIn={loggedIn} loggedInUsername={username}/>}/>
          <Route path='/Mission' element={<Mission_Purpose />} />
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;



