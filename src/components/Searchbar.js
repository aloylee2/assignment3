// SearchBar.js
import React, { useState } from 'react';
import './Searchbar.css';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Update the parent component's search query
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder={placeholder} 
                value={query} 
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
