import React from 'react';
import { useState } from 'react';

const PhotoSlider = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= photos.length ? 0 : newIndex;
    });
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? photos.length - 1 : newIndex;
    });
  };

  return (
    <div>
      <button onClick={prevPhoto}>Back</button>
      <img src={photos[currentPhotoIndex]} alt="Slider" />
      <button onClick={nextPhoto}>Next</button>
    </div>
  );
};

const App = () => {
  const photos = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a162ca4b-a442-4182-bfa0-4be07063e623/air-max-alpha-trainer-5-mens-training-shoes-7LjRM6.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9355f630-53c7-4567-89b4-a788c93171ea/gt-jump-basketball-shoes-22QS5F.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ab80386-9c58-4936-a029-60a5ecaf5592/air-max-270-big-kids-shoes-HbtNX3.png',
  ];

  return <PhotoSlider photos={photos} />;
};

export default App;

