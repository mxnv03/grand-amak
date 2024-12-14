import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => (
  <div className="contact-page">
    <h1>Свяжитесь с нами</h1>
    <div className="contact-info">
      <div className="contact-details">
        <h2>Наше месторасположение</h2>
        <p>606100 Perchankina Street, Pavlovo, 45</p>
        <h2>Будем на связи</h2>
        <p><strong>Телефон:</strong> <a href="tel:+7 (910) 871-29-28">+7 (910) 871-29-28</a></p>
        <p><strong>Email:</strong> pochta@gmail.com</p>
        <h2>Мы в соцсетях</h2>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Kennel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116540.97597590405!2d42.92771985960363!3d55.96174351151195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e51b7acf382df%3A0x5f136d0f8758d4f3!2z0J_QsNCy0LvQvtCy0L4sINCd0LjQttC10LPQvtGA0L7QtNGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1733601730213!5m2!1sru!2sru" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <h2>Вы можете отправить нам сообщение</h2>
    <ContactForm />
  </div>
);

export default Contact;
