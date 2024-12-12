import React, { useState } from 'react';
import './Home.css';
import mainBanner from '../assets/logo.jpg'; // Ваш баннер
import { FaTimes } from 'react-icons/fa'; // Иконка для закрытия

// Пример данных новостей
const newsData = [
  {
    id: 1,
    date: '11.12.24',
    title: 'Сегодня вторник',
    description: 'Описание новости 1...',
    images: [mainBanner, '/images/news1.jpg', '/images/news2.jpg'],
    content: 'Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...Описание новости 1...',
  },
  {
    id: 2,
    date: '11.12.24',
    title: 'Новость 2',
    description: 'Описание новости 2...',
    images: ['/images/news3.jpg'],
    content: 'Полное описание новости 2...',
  },
  // Добавьте другие новости
];

const Home = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Открытие новости
  const openNewsModal = (news) => {
    setSelectedNews(news);
    setCurrentSlide(0); // Сброс текущего слайда при открытии
  };

  // Закрытие новости
  const closeNewsModal = () => {
    setSelectedNews(null);
  };

  // Переключение слайдов
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % selectedNews.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + selectedNews.images.length) % selectedNews.images.length
    );
  };

  return (
    <div className="home-page">
      {/* Баннер */}
      <div className="banner">
        <img src={mainBanner} alt="Баннер" />
      </div>

      {/* Лента новостей */}
      <div className="news-feed">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="news-item"
            onClick={() => openNewsModal(news)}
          >
            <div className="news-image">
              <img src={news.images[0]} alt={news.title} />
            </div>
            <div className="news-text">
              <h2>{news.title}</h2>
              <h4>{news.date}</h4>
              <p>{news.description.length > 100 ? news.description.substring(0, 100) + '...' : news.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно с новостью */}
      {selectedNews && (
        <div className="news-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeNewsModal}>
              <FaTimes />
            </button>
            <h2>{selectedNews.title}</h2>
            <p>{selectedNews.content}</p>

            {/* Слайд-шоу */}
            <div className="carousel">
              <button className="prev" onClick={prevSlide}>‹</button>
              <img
                src={selectedNews.images[currentSlide]}
                alt={`Слайд ${currentSlide + 1}`}
              />
              <button className="next" onClick={nextSlide}>›</button>
            </div>
          </div>
          <div className="modal-overlay" onClick={closeNewsModal}></div>
        </div>
      )}
    </div>
  );
};

export default Home;
