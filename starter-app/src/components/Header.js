import React from 'react';
import './Header.css';

function Header(props) { // pass in props from parent component
    return(
        <div className="header">
            {props.title}
        </div>
    )
}

export default Header;