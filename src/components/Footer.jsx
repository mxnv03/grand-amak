import React from 'react';
import './Footer.css'; // Подключаем CSS для стилизации
import wassapGif from '../assets/wassap_logo.gif';
import telegramGif from '../assets/tg_logo.gif';
import logo_black from '../assets/Grand_Amak_logo.png';


const Footer = () => {
  return (
    <footer class="custom-footer">
      <div class="footer-container">
        <div class="footer-section">
          <img src={logo_black} alt="Asti Mitrel Logo" class="footer-logo" />
          <p>Профессиональная забота о каждом выпускнике</p>
        </div>

        <div class="footer-section">
          <h3>Grand Amak</h3>
          <ul>
            <li><a href="/dogs">Наши производители</a></li>
            <li><a href="/puppies">Свободные щенки</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Полезное</h3>
          <ul>
            <li><a href="/contact">Контакты</a></li>
            <li><a href="/galery">Галерея</a></li>
            <li><a href="/">Политика конфиденциальности</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Контакты</h3>
          <p><a href="tel:+7 (910) 871-29-28">+7 (910) 871-29-28</a></p>
          <p><a href="https://api.whatsapp.com/send/?phone=79108712928&text&type=phone_number&app_absent=0" target="_blank" class="footer-icon"> 
            <img src={wassapGif} alt="WhatsApp Icon" />
            WhatsApp
          </a></p>
          <p><a href="https://t.me/Grand_Amak" target="_blank" class="footer-icon"> 
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
