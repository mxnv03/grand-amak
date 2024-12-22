import React, { useState } from 'react';
import './Dogs.css';
import diva1 from '/src/assets/diva/diva1.jpg';
import liya1 from '/src/assets/liya/liya1.jpg'
import miechel1 from '/src/assets/miechel/miechel1.jpg'
import nika1 from '/src/assets/nika/nika1.jpg'

interface Dog {
  id: number;
  name: string;
  birthDate: string;
  description: string;
  images: string[];
  tituls: string;
  breed: string;
  simple_name: string;
  sk_name: string;
}

const dogsData: Dog[] = [
  {
    id: 1,
    name: 'HADI',
    birthDate: '2021-06-15',
    description: 'Maximus is a strong and loyal American Akita with a playful spirit and protective instincts.',
    images: [],
    tituls: 'Юный чемпион',
    breed: 'Американская акита',
    simple_name: 'Хади',
    sk_name: 'Хади',
  },
  {
    id: 2,
    name: 'GRAND AMAK YANIKA',
    birthDate: '2020-09-10',
    description: 'Luna is a gentle and elegant Akita with a calm demeanor and a beautiful coat.Luna is a gentle and elegant Akita with a calm demeanor and a beautiful coat',
    images:[nika1],
    tituls: 'Юный чемпион',
    breed: 'Американская акита',
    simple_name: 'Ника',
    sk_name: 'Нику'
  },
  {
    id: 3,
    name: 'EDELIA IZ CORPORACII ZVEZD',
    birthDate: '2021-06-15',
    description: 'Maximus is a strong and loyal American Akita with a playful spirit and protective instincts.',
    images: [liya1],
    tituls: 'Юный чемпион',
    breed: 'Пражский крысарик',
    simple_name: 'Лия',
    sk_name: 'Лию'
  },
  {
    id: 4,
    name: 'MIECHEL',
    birthDate: '2021-06-15',
    description: 'Maximus is a strong and loyal American Akita with a playful spirit and protective instincts.',
    images: [miechel1],
    tituls: 'Юный чемпион',
    breed: 'Пражский крысарик',
    simple_name: 'Мишелька',
    sk_name: 'Мишель'
  },
  {
    id: 5,
    name: 'INDEVOR BREAK THE RULES',
    birthDate: '2021-06-15',
    description: 'Teona is a playful and vibrant Prague Ratter with a curious personality.',
    images: [],
    tituls: 'Юный чемпион',
    breed: 'Американская акита',
    simple_name: '__',
    sk_name: 'Стешу'
  },
  {
    id: 6,
    name: 'GRAND AMAK DIVA',
    birthDate: '2021-06-15',
    description: 'Diva is a calm and elegant Prague Ratter with a sweet temperament.',
    images: [diva1],
    tituls: 'Юный чемпион',
    breed: 'Американская акита',
    simple_name: 'Дива',
    sk_name: 'Диву'
  },
];

const Dogs: React.FC = () => {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const openDogModal = (dog: Dog) => {
    setSelectedDog(dog);
  };

  const closeDogModal = () => {
    setSelectedDog(null);
  };

  const openFullscreen = (index: number) => {
    if (selectedDog) {
      setFullscreenImage(selectedDog.images[index]);
      setImageIndex(index);
    }
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const navigateImage = (direction: number) => {
    if (selectedDog) {
      const totalImages = selectedDog.images.length;
      const newIndex = (imageIndex + direction + totalImages) % totalImages;
      setImageIndex(newIndex);
      setFullscreenImage(selectedDog.images[newIndex]);
    }
  };

  const americanAkitas = dogsData.filter((dog) => dog.breed === 'Американская акита');
  const pragueRats = dogsData.filter((dog) => dog.breed === 'Пражский крысарик');

  return (
    <div className="dogs-page">
      <h1>Наши собаки</h1>

      <h2>Американские акиты</h2>
      <div className="dogs-gallery">
        {americanAkitas.map((dog) => (
          <div className="dog-card" key={dog.id} onClick={() => openDogModal(dog)}>
            <img src={dog.images[0]} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>Born: {dog.birthDate}</p>
          </div>
        ))}
      </div>

      <h2>Пражские крысарики</h2>
      <div className="dogs-gallery">
        {pragueRats.map((dog) => (
          <div className="dog-card" key={dog.id} onClick={() => openDogModal(dog)}>
            <img src={dog.images[0]} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>Born: {dog.birthDate}</p>
          </div>
        ))}
      </div>

      {selectedDog && (
        <div className="dog-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeDogModal}>
              &times;
            </button>
            <h2>{selectedDog.name}</h2>
            <p><strong>Дата рождения:</strong> {selectedDog.birthDate}</p>
            <p><strong>Титулы:</strong> {selectedDog.tituls}</p>
            <p><strong>Немного про {selectedDog.sk_name}:</strong> {selectedDog.description}</p>
            <div className="dog-carousel">
              {selectedDog.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedDog.name} ${index + 1}`}
                  onClick={() => openFullscreen(index)}
                />
              ))}
            </div>
          </div>
          <div className="modal-overlay" onClick={closeDogModal}></div>
        </div>
      )}

      {fullscreenImage && (
        <div className="fullscreen-modal">
          <button className="close-button" onClick={closeFullscreen}>
            &times;
          </button>
          <button className="nav-button prev" onClick={() => navigateImage(-1)}>
            <span>&#8249;</span>
          </button>
          <img src={fullscreenImage} alt={`Image ${imageIndex + 1}`} />
          <button className="nav-button next" onClick={() => navigateImage(1)}>
            <span>&#8250;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Dogs;
