import React from 'react';
import './DogCard.css';

interface DogCardProps {
  name: string;
  image: string;
  description: string;
}

const DogCard: React.FC<DogCardProps> = ({ name, image, description }) => (
  <div className="dog-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default DogCard;
