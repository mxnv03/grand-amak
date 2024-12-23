import React from 'react';
import './Footer.css'; 
import wassapGif from '/src/assets/wassap_logo.gif';
import telegramGif from '/src/assets/tg_logo.gif';
import logo_black from '/src/assets/Grand_Amak_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo_black} alt="Grand Amak Logo" className="footer-logo" />
          <p>Профессиональная забота о каждом выпускнике</p>
        </div>

        <div className="footer-section">
          <h3>Grand Amak</h3>
          <ul>
            <li><a href="/grand-amak/dogs">Наши производители</a></li>
            <li><a href="/grand-amak/puppies">Свободные щенки</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Полезное</h3>
          <ul>
            <li><a href="/grand-amak/gallery">Галерея</a></li>
            <li><a href="/grand-amak/src/assets/pdf/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0.pdf" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Контакты</h3>
          <p><a href="tel:+7 (910) 871-29-28">+7 (910) 871-29-28</a></p>
          <p><a href="https://api.whatsapp.com/send/?phone=79108712928&text&type=phone_number&app_absent=0" target="_blank" className="footer-icon"> 
            <img src={wassapGif} alt="WhatsApp Icon" />
            WhatsApp
          </a></p>
          <p><a href="https://t.me/Grand_Amak" target="_blank" className="footer-icon"> 
            <img src={telegramGif} alt="Telegram Icon" />
            Telegram
          </a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Профессиональный питомник Grand Amak. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
