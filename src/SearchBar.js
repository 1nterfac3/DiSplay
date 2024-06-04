import React from 'react';

const SearchBar = () => {
    return (
        <div className="SearchBar-Container">
            <input className='search-bar-elements' type="text" placeholder="Search" />
            <button className='search-bar-elements'>Search</button>
        </div>
    );
};

export default SearchBar;