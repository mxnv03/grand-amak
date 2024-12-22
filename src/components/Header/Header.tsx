import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/src/assets/Grand_Amak_logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Указываем тип состояния

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Функция для переключения состояния
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/grand-amak" className="header-brand">
          <img src={logo} alt="Kennel Logo" className="logo" />
          <h1>Grand Amak</h1>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/grand-amak" onClick={() => setMenuOpen(false)}>Главная</Link></li>
            {/* <li><Link to="/about-breed" onClick={() => setMenuOpen(false)}>О питомнике</Link></li> */}
            <li><Link to="/dogs" onClick={() => setMenuOpen(false)}>Наши собаки</Link></li>
            <li><Link to="/puppies" onClick={() => setMenuOpen(false)}>Щенки</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Галерея</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
