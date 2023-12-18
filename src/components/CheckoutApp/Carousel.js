import React from 'react';
import ControlledCarousel from './ControlledCarousel';

const Carousel = () => {
  const images = [
    'https://cdn.dribbble.com/users/4199495/screenshots/8028638/media/f6b516da86ac4532f30426c1b7f1355f.png?resize=1000x750&vertical=center',
    'https://cdn.dribbble.com/users/4199495/screenshots/9385859/media/ed5b400ba6a43af6ca5c86512659b1d8.jpg?resize=1000x750&vertical=center',
    'https://cdn.dribbble.com/userupload/10526060/file/original-5fef06e6195a8f079242db6181262079.png?resize=1000x750&vertical=center',
  ];

  return (
    <div>
      <ControlledCarousel images={images} />
    </div>
  );
};

export default Carousel;
