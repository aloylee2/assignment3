// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Login successful!');
      onLogin(username);  // Pass the username to the onLogin function
      localStorage.setItem('isLoggedIn', 'true'); // Set login status in local storage
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Login</h2>
      <label>Username:</label>
      <input 
        type='text' 
        placeholder='Username' 
        value={username} 
        className='username'
        onChange={(e) => setUsername(e.target.value)} 
      />
      <label>Password:</label>
      <input 
        type='password' 
        placeholder='Password' 
        value={password} 
        className='password'
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
