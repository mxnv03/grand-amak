import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Home from './pages/Home/Home';
import Dogs from './pages/Dogs/Dogs';
import Puppies from './pages/Puppies/Puppies';
import Contact from './pages/Contact/Contact';
import './index.css';
import './SnowEffect.css'; 

const App: React.FC = () => {
  useEffect(() => {
    const createSnowflake = () => {
      if (window.innerWidth < 768) return; // Выключаем снежинки на мобильных
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.opacity = `${Math.random()}`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      snowflake.textContent = "❄";
      document.body.appendChild(snowflake);
  
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router basename="/grand-amak">
      <Header />
      <main>
        <Routes>
          <Route path="/grand-amak" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
