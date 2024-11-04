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

const Navbar = ({ isLoggedIn, handleLogout, username }) => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggleDropdown1 = () => setDropdownOpen1((prev) => !prev);
    const toggleDropdown2 = () => setDropdownOpen2((prev) => !prev);
    const toggleDropdown3 = () => setDropdownOpen3((prev) => !prev);

    const handleMouseEnter1 = () => setDropdownOpen1(true);
    const handleMouseLeave1 = () => setDropdownOpen1(false);

    const handleMouseEnter2 = () => setDropdownOpen2(true);
    const handleMouseLeave2 = () => setDropdownOpen2(false);

    const handleMouseEnter3 = () => setDropdownOpen3(true);
    const handleMouseLeave3 = () => setDropdownOpen3(false);

    return (
        <nav className="navbar">
            <div>
                <h2>My Logo</h2>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <Link to="#" className="dropdown-toggle" onClick={toggleDropdown1} aria-haspopup="true" aria-expanded={dropdownOpen1}>
                            Adopt animals
                        </Link>
                        <Dropdown isOpen={dropdownOpen1} toggleDropdown={setDropdownOpen1}>
                            <Link to="/dog">View Dogs</Link>
                            <Link to="/cat">View Cats</Link>
                        </Dropdown>
                    </li>
                    <li><Link to="/release_pet">Release Pet</Link></li>
                    <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <Link to="#" className="dropdown-toggle" onClick={toggleDropdown3} aria-haspopup="true" aria-expanded={dropdownOpen3}>
                            Ways to help
                        </Link>
                        <Dropdown isOpen={dropdownOpen3} toggleDropdown={setDropdownOpen3}>
                            <Link to="/Donate">Donate</Link>
                            <Link to="/Volunteer">Volunteer</Link>
                            <Link to="/Shop">Shop</Link>
                        </Dropdown>
                    </li>
                    <li><Link to="/aboutus">Contact</Link></li>

                    {isLoggedIn && (
                        <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                            <Link to="#" className="dropdown-toggle" onClick={toggleDropdown2} aria-haspopup="true" aria-expanded={dropdownOpen2}>
                                {username} {/* Display the logged-in username here */}
                            </Link>
                            <Dropdown isOpen={dropdownOpen2} toggleDropdown={setDropdownOpen2}>
                                <Link to="/service1">View profile</Link>
                                <Link to="/service2">Edit profile</Link>
                                <Link to="/service3">Service 3</Link>
                            </Dropdown>
                        </li>
                    )}

                    {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                    {!isLoggedIn && <li><Link to="/register">Sign Up</Link></li>}
                    {isLoggedIn && (
                        <li>
                            <Link to="#" onClick={handleLogout} className="logout-button">Logout</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
