import React, { useContext } from 'react';
import './header.css';
import { DataContext } from "../../context/DataContext";



function Header() {
    const { content } = useContext(DataContext);
    const navigationLinks = content?.headerData?.navigationLinks || [];

    return (
        <nav className="header-container">
            <div className="custom-container">
                <a>{content?.headerData?.logoText}</a>
            </div>
            <div className="navigation-bar">
                {navigationLinks.map((link, index) => (
                    <a key={index} href="#">{link}</a>
                ))}
            </div>
        </nav>
    );
}

export default Header;


