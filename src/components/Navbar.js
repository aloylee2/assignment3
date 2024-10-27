import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Dropdown = ({ isOpen, toggleDropdown, children }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                toggleDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleDropdown]);

    return (
        <div ref={dropdownRef}>
            {isOpen && (
                <div className="dropdown-menu">
                    {children}
                </div>
            )}
        </div>
    );
};

const Navbar = ({ isLoggedIn, handleLogout }) => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const handleMouseEnter1 = () => setDropdownOpen1(true);
    const handleMouseLeave1 = () => setDropdownOpen1(false);

    const handleMouseEnter2 = () => setDropdownOpen2(true);
    const handleMouseLeave2 = () => setDropdownOpen2(false);

    return (
        <nav className="navbar">
            <h2>My SPA</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    <Link to="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded={dropdownOpen1}>
                        View animals
                    </Link>
                    <Dropdown isOpen={dropdownOpen1} toggleDropdown={setDropdownOpen1}>
                        <Link to="/dog">View Dogs</Link>
                        <Link to="/cat">View Cats</Link>
                    </Dropdown>
                </li>
                {isLoggedIn && (
                    <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <Link to="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded={dropdownOpen2}>
                            Services
                        </Link>
                        <Dropdown isOpen={dropdownOpen2} toggleDropdown={setDropdownOpen2}>
                            <Link to="/service1">Service 1</Link>
                            <Link to="/service2">Service 2</Link>
                            <Link to="/service3">Service 3</Link>
                        </Dropdown>
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
