import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
    
    return (
        <div className="App-Header">
            <div className='App-Header-Content'>
                <img src={props.imageSrc} alt="Company Logo" className="Company-logo"/>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

Header.defaultProps = {
    imageSrc: 'https://picsum.photos/seed/picsum/200/300',
    alt: 'Company Logo',
    title: 'DiSplay',
    desc: 'Sample Description'
};

export default Header;