import React from 'react';
import './Header.css';

function Header(props) { // pass in props from parent component
    return(
        <div className="header">
            <i class="material-icons">theater_comedy</i> {props.title} <i class="material-icons">theater_comedy</i>
            
        </div>
    )
}

export default Header;