// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (!userExists) {
      existingUsers.push({ username, password, email });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('User already exists!');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
  <h2>Register</h2>
  <form onSubmit={handleRegister}>
    <label>Username:</label>
    <input 
      type='text' 
      placeholder='Username' 
      className='username'
      required
      value={username} 
      onChange={(e) => setUsername(e.target.value)} 
    />
    <label>Email:</label>
    <input 
      type='email' 
      placeholder='Email' 
      className='email'
      required
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
    />
    <label>Password:</label>
    <input 
      type='password' 
      placeholder='Password'
      className='password' 
      required
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
    />
    <button type="submit">Register</button>
  </form>
</div>
  );
};

export default Register;
