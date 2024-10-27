import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ShowCat from './pages/ResourceCat';
import ShowDog from './pages/ResourceDog';
import Dogform from './pages/AdoptDog';
import Catform from './pages/AdoptCat';

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
        <Route path="/cat" element={<ShowCat/>} />
        <Route path="/dog" element={<ShowDog/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/adoptdog" element={<Dogform />} />
        <Route path="/adoptcat" element={<Catform />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home"  element={<Home username={username} />} />  {/* Pass username to Home */}
      </Routes>
      </div>
    </Router>
  );
};

export default App;

// src/App.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [dogs, setDogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDogs = async () => {
//       try {
//         // Fetch breed list
//         const breedsResponse = await axios.get('https://dog.ceo/api/breeds/list/all');
//         const breeds = Object.keys(breedsResponse.data.message);

//         // Get random breeds and fetch images
//         const randomBreeds = [];
//         for (let i = 0; i < 12; i++) {
//           const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
//           const imageResponse = await axios.get(`https://dog.ceo/api/breed/${randomBreed}/images/random`);
//           randomBreeds.push({ breed: randomBreed, image: imageResponse.data.message });
//         }

//         setDogs(randomBreeds);
//       } catch (error) {
//         console.error("Error fetching dog images", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDogs();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Random Dog Images and Breeds</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {dogs.map((dog, index) => (
//           <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
//             <img src={dog.image} alt={`Dog ${index + 1}`} style={{ width: '200px', height: 'auto' }} />
//             <p>{dog.breed}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

