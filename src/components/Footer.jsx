import React from 'react';
import './Footer.css'; // Подключаем CSS для стилизации

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>О питомнике</h3>
          <p>Наш питомник специализируется на разведении американских акит и других пород. Мы заботимся о каждом щенке, предоставляя им лучший уход.</p>
          <p>Контакты: info@yourkennel.com</p>
          <p>Адрес: Улица Питомников, 123, Город, Страна</p>
        </div>

        <div className="footer-social">
          <h3>Мы в социальных сетях</h3>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook-icon.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-icon.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter-icon.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/youtube-icon.png" alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Профессиональный питомник Grand Amak. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
