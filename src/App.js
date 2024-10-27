import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    // Additional login logic here
    setUsername(username); 
  };
  
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
       <Navbar isLoggedIn={loggedIn} handleLogout={handleLogout} />
      <div className="container">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home"  element={<Home username={username} />} />  {/* Pass username to Home */}
      </Routes>
      </div>
    </Router>
  );
};

export default App;
