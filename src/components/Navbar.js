import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, handleLogout }) => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggleDropdown1 = (e) => {
        e.preventDefault();
        setDropdownOpen1(prev => !prev);
        if (dropdownOpen2) setDropdownOpen2(false);
    };

    const toggleDropdown2 = (e) => {
        e.preventDefault();
        setDropdownOpen2(prev => !prev);
        if (dropdownOpen1) setDropdownOpen1(false);
    };

    return (
        <nav className="navbar">
            <h2>My SPA</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li>
                    <Link to="#" onClick={toggleDropdown1} className="dropdown-toggle" aria-haspopup="true" aria-expanded={dropdownOpen1}>
                        View animals
                    </Link>
                    {dropdownOpen1 && (
                        <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                            <Link to="/service1">Dogs</Link>
                            <Link to="/service2">Cats</Link>
                        </div>
                    )}
                </li>
                {isLoggedIn && ( // Conditionally render the Services link
                    <li>
                        <Link to="#" onClick={toggleDropdown2} className="dropdown-toggle" aria-haspopup="true" aria-expanded={dropdownOpen2}>
                            Services
                        </Link>
                        {dropdownOpen2 && (
                            <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                <Link to="/service1">Service 1</Link>
                                <Link to="/service2">Service 2</Link>
                                <Link to="/service3">Service 3</Link>
                            </div>
                        )}
                    </li>
                )}
                <li><Link to="/aboutus">About Us</Link></li>
                {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                {!isLoggedIn && <li><Link to="/register">Sign Up</Link></li>}
                {isLoggedIn && (
                    <li>
                        <Link to="#" onClick={handleLogout} className="logout-button">Logout</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
