import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ControlledCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >

      <div style={{
        width: 64,
        height: 64,
        mx: 'auto',
        borderRadius: '50%',
        border: 'solid #5956E9',
        backgroundColor: '#5956E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
      }}>
        <NavigateBeforeIcon onClick={prevSlide} sx={{ color: "white" }} fontSize="large" />
      </div>

      <img
        style={{
          width: 800, height: 600, borderRadius: 20
        }}
        src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

      <div style={{
        width: 64,
        height: 64,
        mx: 'auto',
        borderRadius: '50%',
        border: 'solid #5956E9',
        backgroundColor: '#5956E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
      }}>
        <NavigateNextIcon onClick={nextSlide} sx={{ color: "white" }} fontSize="large" />
      </div>
    </div>
  );
};

export default ControlledCarousel;
