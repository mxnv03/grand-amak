import React from 'react';
import DogCard from '../components/DogCard';

const Puppies = () => (
  <div>
    <h1>Puppies for Sale</h1>
    <div className="dog-list">
      <DogCard name="Puppy 1" image="path/to/puppy1.jpg" description="Adorable Puppy 1" />
      <DogCard name="Puppy 2" image="path/to/puppy2.jpg" description="Adorable Puppy 2" />
    </div>
  </div>
);

export default Puppies;
