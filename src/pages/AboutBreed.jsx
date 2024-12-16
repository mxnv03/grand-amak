import React from 'react';
import './AboutBreed.css';
import akitaImage1 from '../assets/logo.jpg';
import akitaImage2 from '../assets/logo.jpg';

const AboutBreed = () => (
  <div className="about-breed">
    <h1>Немного о нас</h1>
    <section className="intro">
      <div className="text">
        <p>
          The American Akita is a majestic and loyal breed known for its strength, dignity, and exceptional companionship. 
          Originally bred in Japan, these dogs have become a beloved breed around the world, cherished for their protective 
          instincts and strong bond with their families.
        </p>
        <p>
          Their striking appearance, featuring a thick double coat, triangular ears, and a curled tail, makes them stand out 
          among other breeds. Akitas are known for their calm and composed demeanor, but they are also fearless protectors 
          of their loved ones.
        </p>
      </div>
      <div className="image">
        <img src={akitaImage1} alt="American Akita standing proudly" />
      </div>
    </section>

    <section className="history">
      <h2>History of the Breed</h2>
      <div className="content">
        <img src={akitaImage2} alt="American Akita puppy" />
        <p>
          The Akita breed originated in the mountainous regions of Japan, where they were bred as versatile hunting dogs. 
          They were tasked with hunting large game such as boar and bears. During the 20th century, the breed split into two 
          types: the Japanese Akita (Akita Inu) and the American Akita, which developed distinct characteristics due to their 
          separate breeding paths.
        </p>
        <p>
          Today, the American Akita is celebrated for its unique qualities, combining strength, loyalty, and elegance in one 
          impressive breed.
        </p>
      </div>
    </section>

    <section className="care-tips">
      <h2>Care Tips</h2>
      <ul>
        <li><strong>Exercise:</strong> Akitas need regular exercise to stay healthy and happy. Daily walks and playtime are essential.</li>
        <li><strong>Grooming:</strong> Their thick double coat requires weekly brushing, and more frequent grooming during shedding season.</li>
        <li><strong>Training:</strong> Early socialization and consistent training are crucial for Akitas due to their strong-willed nature.</li>
      </ul>
    </section>
  </div>
);

export default AboutBreed;
