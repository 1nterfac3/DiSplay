import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';


const Header = (props) => {
    
    return (
        <div className="App-Header">
            <div className='App-Header-Content'>
                <img src={props.imageSrc} alt="Company Logo" className="Company-logo"/>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <SearchBar />
        </div>
    );
};

Header.defaultProps = {
    imageSrc: '/images/logo.webp',
    alt: 'Company Logo',
    title: 'DiSplay',
    desc: 'Sample Description'
};

export default Header;