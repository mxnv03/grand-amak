import React from 'react';
import './DogCard.css';

const DogCard = ({ name, image, description }) => (
  <div className="dog-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default DogCard;
