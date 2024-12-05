import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <span className="header__logo-text header__logo-text--premium">Premium</span>
                    <span className="header__logo-text header__logo-text--car">Car</span>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Home</a></li>
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Recipes</a></li>
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Article</a></li>
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Contact</a></li>
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Purchase</a></li>
                    </ul>
                </nav>
                <div className="header__search">
                    <img src="/img/search-icon.png" alt="Search" className="header__search-icon" />
                </div>
            </div>
        </header>
    );
};

export default Header;