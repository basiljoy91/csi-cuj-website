// src/components/ImageSlider.jsx
import React, { useState, useEffect } from 'react';

// Import your slider images
import sliderImg1 from '../assets/slider_img1.jpg';
import sliderImg2 from '../assets/slider_img2.jpg';
import sliderImg3 from '../assets/slider_img3.jpg';
import sliderImg4 from '../assets/slider_img4.jpg';
import sliderImg5 from '../assets/slider_img5.jpg';

const images = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-xl shadow-2xl animate-fade-in"> {/* Changed to rounded-3xl */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-10 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-3xl ${ // Added rounded-3xl here too
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* You can add navigation dots/arrows here if desired */}
    </div>
  );
};

export default ImageSlider;