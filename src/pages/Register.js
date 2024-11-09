// src/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (!userExists) {
      existingUsers.push({ username, password, email });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert('Registration successful!');
    } else {
      alert('User already exists!');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Register</h2>
      <label>Username:</label>
      <input type='text' 
      placeholder='Username' 
      className='username'
      value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type='text' 
      placeholder='Email' 
      className='email'
      value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type='password' 
      placeholder='Password'
      className='password' 
      value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
