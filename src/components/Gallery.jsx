import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      // Загружаем все изображения из директории assets/gallery
      const imageContext = import.meta.glob('/src/assets/gallery/*.{jpg,png}');
      const imagePaths = await Promise.all(
        Object.keys(imageContext).map(async (path) => {
          const image = await imageContext[path]();
          return {
            original: image.default,
            thumbnail: image.default,
          };
        })
      );
      setImages(imagePaths);
    };

    importImages();
  }, []);

  return (
    <div className="gallery-container">
      <h1>Наши собаки и выпускники</h1>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={true}
      />
    </div>
  );
};

export default Gallery;
