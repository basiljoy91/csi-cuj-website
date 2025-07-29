import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDE_INTERVAL = 3000;

const EventImageSlider = ({ images = [], className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused && images.length > 1) {
      intervalRef.current = setInterval(goToNext, SLIDE_INTERVAL);
    }
  }, [goToNext, isPaused, images.length]);

  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resumeAutoplay = useCallback(() => {
    setIsPaused(false);
    if (!intervalRef.current && images.length > 1) {
      intervalRef.current = setInterval(goToNext, SLIDE_INTERVAL);
    }
  }, [goToNext, images.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoplay]);

  if (!images.length) return null;

  return (
    <div
      className={`relative w-full pb-[56.25%] md:pb-0 md:h-[400px] rounded-3xl overflow-hidden bg-white border-4 border-blue-600 shadow-lg ${className}`}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full flex items-center justify-center">
            <img
              src={img}
              alt={`Event Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-lg z-10 focus:outline-none transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-lg z-10 focus:outline-none transition-all duration-200"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10 bg-black/20 px-4 py-2 rounded-full shadow-md">
            {images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  dotIndex === currentIndex ? 'bg-white' : 'bg-gray-300 hover:bg-gray-200'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventImageSlider; 