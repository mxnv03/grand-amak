import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <img src={logo} alt="Kennel Logo" className="logo" />
          <h1>Grand Amak</h1>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link></li>
            <li><Link to="/about-breed" onClick={() => setMenuOpen(false)}>О питомнике</Link></li>
            <li><Link to="/dogs" onClick={() => setMenuOpen(false)}>Наши собаки</Link></li>
            <li><Link to="/puppies" onClick={() => setMenuOpen(false)}>Щенки</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
