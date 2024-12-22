import React from 'react';
import './PuppyInfo.css';

const PuppyInfo = ({ title, image, pedigreeLink }) => {
  return (
    <section className="puppy-info-section">
      <div className="puppy-info-container">
        <div className="puppy-slider">
          <img src={image} alt="Щенки американской акиты" />
        </div>
        <div className="puppy-details">
          {/* Заголовок */}
          <h1 className="puppy-title">{title}</h1>
          {/* Ссылка на родословную */}
          <p className="puppy-link">
            Ссылка на родословную:{' '}
            <a href={pedigreeLink} target="_blank" rel="noopener noreferrer">
              родословная 
            </a>
          </p>
          {/* Кнопка WhatsApp */}
          <button className="whatsapp-button">
            <a href="https://t.me/Grand_Amak" target="_blank" rel="noopener noreferrer">
              🐾 Связаться с заводчиком
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PuppyInfo;
