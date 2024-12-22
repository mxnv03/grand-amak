import React from 'react';
import PuppyInfo from '/src/components/PuppyInfo/PuppyInfo';
import puppies_u from '/src/assets/puppies1.jpg';

// Тип для данных о щенках
interface PuppyData {
  title: string;
  image: string;
  pedigreeLink: string;
}

const PuppiesPage: React.FC = () => {
  // Данные для разных блоков щенков
  const puppiesData: PuppyData[] = [
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