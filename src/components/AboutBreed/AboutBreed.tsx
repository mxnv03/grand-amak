import React from 'react';
import './AboutBreed.css';
import kennelImage from '/src/assets/about_breed.jpg';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={kennelImage} alt="О питомнике" />
        </div>
        <div className="about-text">
          <h2>О нашем питомнике</h2>
          <p>
            Мы — профессиональный питомник, специализирующийся на разведении породистых собак. Мы стремимся обеспечить лучшие условия для наших питомцев и заботимся о каждом из них. Наши щенки растут в любви и внимании, получают всю необходимую медицинскую помощь и воспитание. Мы гордимся нашими достижениями и всегда готовы помочь новым владельцам в процессе адаптации их новых питомцев.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
