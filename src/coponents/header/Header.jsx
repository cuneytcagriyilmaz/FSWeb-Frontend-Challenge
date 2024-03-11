import React from 'react';
import './header.css';

function Header() {
    return (
        <nav className="header-container">
            <div className="custom-container">
                <p>C.Ç.Y</p>
            </div>
            <div className="navigation-bar">
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Hire Me</a>
            </div>
        </nav>
    );
}

export default Header;
