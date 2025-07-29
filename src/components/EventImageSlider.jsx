import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDE_INTERVAL = 3000;

const MOBILE_WIDTH = 640;
const MOBILE_HEIGHT = 360;
const DESKTOP_WIDTH = 900;
const DESKTOP_HEIGHT = 506;

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
      className={`relative mx-auto rounded-3xl overflow-hidden bg-white border-4 border-blue-600 shadow-2xl shadow-blue-200/60 flex items-center justify-center ${className}`}
      style={{
        width: '100%',
        maxWidth: `${DESKTOP_WIDTH}px`,
        minWidth: `${MOBILE_WIDTH}px`,
        aspectRatio: '16/9',
        height: 'auto',
      }}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Fade-only transition, fixed 16:9 aspect ratio */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Event Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-contain rounded-2xl shadow-xl transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            loading="lazy"
            style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%' }}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-lg z-20 focus:outline-none transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-lg z-20 focus:outline-none transition-all duration-200"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20 bg-black/20 px-4 py-2 rounded-full shadow-md">
            {images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`transition-all duration-300 rounded-full focus:outline-none
                  ${dotIndex === currentIndex ? 'w-5 h-5 bg-white scale-125 shadow-lg' : 'w-3 h-3 bg-gray-300 hover:bg-gray-200'}`}
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