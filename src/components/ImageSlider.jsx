import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import your main slider images
import mainSliderImg1 from '../assets/main_slider_img1.jpg';
import mainSliderImg2 from '../assets/main_slider_img2.jpg';
import mainSliderImg3 from '../assets/main_slider_img3.jpg';
import mainSliderImg4 from '../assets/main_slider_img4.jpg';
import mainSliderImg5 from '../assets/main_slider_img5.jpg';

// Define the structure for each slide with captions
const slides = [
  {
    main: mainSliderImg1,
    title: "Innovate. Collaborate. Lead.",
    description: "Join CSI and unlock your potential in the world of technology. Engaging workshops, expert talks, and collaborative projects await. Be part of a community that fosters growth and innovation.",
    buttonText: "Join Membership",
    buttonLink: "/membership"
  },
  {
    main: mainSliderImg2,
    title: "Transforming Ideas into Reality",
    description: "Our community thrives on creativity and practical application. Explore cutting-edge technologies and contribute to impactful initiatives that shape the future.",
    buttonText: "View Events",
    buttonLink: "/events"
  },
  {
    main: mainSliderImg3,
    title: "Empowering Future Tech Leaders",
    description: "CSI provides a platform for students to hone their skills, network with professionals, and gain real-world experience. Your journey to excellence starts here.",
    buttonText: "Meet Our Council",
    buttonLink: "/student-council"
  },
  {
    main: mainSliderImg4,
    title: "A Hub for Digital Exploration",
    description: "From coding challenges to cybersecurity workshops, we cover diverse areas of computer science. Discover your passion and grow your expertise.",
    buttonText: "Learn More",
    buttonLink: "/about-us"
  },
  {
    main: mainSliderImg5,
    title: "Connecting Minds, Building Futures",
    description: "Beyond academics, we foster a strong sense of community. Participate in social events, team projects, and build lasting connections.",
    buttonText: "See Gallery",
    buttonLink: "/gallery"
  },
];

const SLIDE_INTERVAL = 3000;

const ImageSlider = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Optimized navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  // Optimized autoplay control
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(goToNext, SLIDE_INTERVAL);
    }
  }, [goToNext, isPaused]);

  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resumeAutoplay = useCallback(() => {
    setIsPaused(false);
    if (!intervalRef.current) {
      intervalRef.current = setInterval(goToNext, SLIDE_INTERVAL);
    }
  }, [goToNext]);

  // Cleanup effect
  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoplay]);

  return (
    <div
      className={`relative w-full pb-[56.25%] md:pb-0 md:h-[600px] rounded-3xl overflow-hidden
                  bg-white p-4 transition-all duration-500 ease-out 
                  border-4 border-blue-600 shadow-lg ${className}`}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Sliding container */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1000ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="min-w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">

                {/* Main Image Section */}
                <div className="w-full md:w-3/4 relative flex-shrink-0">
                    <img
                        src={slide.main}
                        alt={`Main Slide ${slideIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="pt-[56.25%]"></div>
                </div>

                {/* Caption Area */}
                <div className="hidden md:flex flex-col justify-center w-full md:w-1/4 p-6 bg-blue-600 text-white">
                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                        {slide.title}
                    </h3>
                    <p className="text-lg mb-6 leading-relaxed">
                        {slide.description}
                    </p>
                    {slide.buttonText && slide.buttonLink && (
                        <Link
                            to={slide.buttonLink}
                            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
                            onClick={pauseAutoplay}
                        >
                            {slide.buttonText}
                        </Link>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
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

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10 bg-black/20 px-4 py-2 rounded-full shadow-md">
        {slides.map((_, dotIndex) => (
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
    </div>
  );
};

export default ImageSlider;