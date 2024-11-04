import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SearchBar from '../components/Searchbar';
import Button from '../components/Button';
import './Resource.css';

const Resource = ({ path, render }) => {
    const initialState = {
        trans: [],
        loading: true,
        error: null,
    };

    const [state, setState] = useState(initialState);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    const getData = useCallback(async () => {
        try {
            const result = await axios.get(path);
            const newData = {
                trans: result.data,
                loading: false,
                error: null,
            };
            setState(newData);
        } catch (error) {
            console.log('Error in getting data', error.message);
        }
    }, [path]);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleSearchInput = (query) => {
        setSearchQuery(query);
    };

    const handleSearch = () => {
        // This could also just update the state if needed
        console.log("Searching for:", searchQuery);
        // In this example, we don't need to do anything here because 
        // the input from SearchBar already updates the searchQuery state.
    };

    const filteredData = state.trans.filter((item) => {
        const breedName = item.breeds && item.breeds[0] && item.breeds[0].name;
        return breedName && breedName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
<div>
  <div className="search-container">
    <SearchBar onSearch={handleSearchInput} placeholder="Search breeds..." />
  </div>
  <div className="showlist">
    {render({ trans: filteredData, loading: state.loading })}
  </div>
</div>
    );
};

export default Resource;
