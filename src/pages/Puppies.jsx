import React from 'react';
import PuppyInfo from '../components/PuppyInfo';
import puppies_u from '../assets/puppies1.jpg';


const PuppiesPage = () => {
  // Данные для разных блоков щенков
  const puppiesData = [
    {
      title: 'В питомнике есть свободные щенки американской акиты',
      image: puppies_u,
      pedigreeLink: 'https://aussieinfo.ru/dog.phpid=36988&screen=4&partnerid=37518&level=4&ilevel=5',
    },
  ];

  return (
    <div>
      {puppiesData.map((puppy, index) => (
        <PuppyInfo
          key={index}
          title={puppy.title}
          image={puppy.image}
          pedigreeLink={puppy.pedigreeLink}
        />
      ))}
    </div>
  );
};

export default PuppiesPage;
