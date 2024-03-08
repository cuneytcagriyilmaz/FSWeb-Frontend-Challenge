import React from 'react';
import './header.css';

function Header() {
    return (
        <nav className="header-container">
            <div className="search-bar">
                <button>Ara</button>
            </div>
            <div className="navigation-bar">
                <div className="nav-item"><button>Yetenekler</button></div>
                <div className="nav-item"><button>Projeler</button></div>
                <div className="nav-item"><button>Beni Kirala</button></div>
            </div>
        </nav>
    );
}

export default Header;
