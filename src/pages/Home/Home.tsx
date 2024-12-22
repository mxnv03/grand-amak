import React from 'react';
import './Home.css';
import mainBanner from '/src/assets/main_page-banner-web.png'; 
import FAQ from '/src/components/FAQ/FAQ';
import ValuesSection from "/src/components/OurValues/OurValues";
import HealthFocusSection from "/src/components/HealthFocusSection/HealthFocusSection";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src={mainBanner} alt="Баннер" />
      </div>

      <div className='help-div'>
        <h2>Узнать про бронирование свободных малышей</h2>
        <a href="/grand-amak/puppies">Подробнее</a>     
      </div>

      <div className="homepage-values-wrapper">
        <ValuesSection />
      </div>

      <div>
        <HealthFocusSection />
      </div>

      <div>
        <FAQ /> 
      </div>

      <div className="banner1">
        <div className="banner-content">
          <h1>Остались вопросы? Напишите нам!</h1>
          <a href="https://t.me/Grand_Amak" className="banner-button">Хочу щенка</a>
        </div>
      </div>
    </div>  
  );
};

export default Home;
