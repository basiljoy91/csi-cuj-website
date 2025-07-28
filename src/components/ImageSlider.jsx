import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for the CTA button

// Import your main slider images (16:9 aspect ratio recommended for these)
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
    buttonLink: "/about-us" // Assuming an About Us page for this link
  },
  {
    main: mainSliderImg5,
    title: "Connecting Minds, Building Futures",
    description: "Beyond academics, we foster a strong sense of community. Participate in social events, team projects, and build lasting connections.",
    buttonText: "See Gallery",
    buttonLink: "/gallery"
  },
];

const SLIDE_INTERVAL = 5000; // Change image every 5 seconds (5000ms)

const ImageSlider = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Ref to hold the interval ID for autoplay

  // Functions for navigation (next/previous slide)
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay control functions (start/pause)
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear any existing interval
    intervalRef.current = setInterval(goToNext, SLIDE_INTERVAL);
  }, [goToNext]);

  const pauseAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Effect to manage autoplay: starts on mount, clears on unmount
  useEffect(() => {
    startAutoplay(); // Start autoplay initially
    return () => pauseAutoplay(); // Cleanup on component unmount
  }, [startAutoplay]); // Dependency array ensures effect re-runs if startAutoplay (or goToNext) changes


  return (
    // Main container for the slider.
    // On mobile: `pb-[56.25%]` makes its height scale with its width to maintain 16:9 ratio.
    // On desktop: `md:pb-0` removes padding-bottom, `md:h-[600px]` sets a fixed height.
    // `bg-gray-100 p-4` creates the white border/gap around the inner content and casts the shadow.
    <div
      className={`relative w-full pb-[56.25%] md:pb-0 md:h-[600px] rounded-3xl overflow-hidden
                  bg-white p-4 transition-all duration-700 ease-in-out 
                  border-4 border-blue-600 shadow-[0_0_30px_rgba(0,123,255,0.3),0_10px_40px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_0_40px_rgba(0,123,255,0.4),0_15px_50px_rgba(0,0,0,0.4)]
                  transform hover:scale-[1.02] ${className}`}
      onMouseEnter={pauseAutoplay} // Pause slideshow on hover
      onMouseLeave={startAutoplay}  // Resume slideshow on mouse leave
    >
      {/* This inner div is absolutely positioned to fill the main container,
          and handles the horizontal sliding transition. */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          // Each individual slide content wrapper. `min-w-full h-full` ensures it takes full space in the flex row.
          <div key={slideIndex} className="min-w-full h-full flex items-center justify-center">
            {/* The inner white box for the current slide.
                On mobile: `flex-col` stacks image/caption vertically (caption is hidden).
                On desktop: `md:flex-row` places image and caption side-by-side.
                `bg-white rounded-2xl overflow-hidden shadow-lg` gives it a card-like appearance. */}
            <div className="w-full h-full flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden 
                           shadow-[0_8px_32px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.1)]
                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,0,0.15)]
                           transform hover:scale-[1.01] transition-all duration-300">

                {/* Main Image Section: Always present, maintains 16:9 aspect ratio */}
                {/* `w-full md:w-3/4` for responsive width. `relative flex-shrink-0` for positioning and layout. */}
                <div className="w-full md:w-3/4 relative flex-shrink-0">
                    <img
                        src={slide.main}
                        alt={`Main Slide ${slideIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {/* This invisible `div` with `pt-[56.25%]` is crucial.
                        It forces its parent container (`w-full md:w-3/4 relative flex-shrink-0`)
                        to maintain a 16:9 aspect ratio, ensuring the image inside (which is absolute-positioned)
                        is always displayed at 16:9. */}
                    <div className="pt-[56.25%]"></div> {/* 16:9 aspect ratio (9 / 16 * 100 = 56.25%) */}
                    {/* Optional subtle overlay that appears on hover for a polished look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Caption Area: Only visible on Desktop (`md` breakpoint and above) */}
                <div className="hidden md:flex flex-col justify-center w-full md:w-1/4 p-6 bg-blue-600 text-white overflow-hidden">
                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                        {slide.title}
                    </h3>
                    <p className="text-lg mb-6 leading-relaxed">
                        {slide.description}
                    </p>
                    {/* Optional Call-to-Action button */}
                    {slide.buttonText && slide.buttonLink && (
                        <Link
                            to={slide.buttonLink}
                            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
                            onClick={pauseAutoplay} // Pause autoplay if user clicks the button
                        >
                            {slide.buttonText}
                        </Link>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows: Positioned absolutely over the slider */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-xl z-10 focus:outline-none transition-all duration-200 transform hover:scale-110"
        aria-label="Previous slide" // Good for accessibility
      >
        <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-xl z-10 focus:outline-none transition-all duration-200 transform hover:scale-110"
        aria-label="Next slide" // Good for accessibility
      >
        <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Navigation Dots: Positioned at the bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10 bg-black/20 px-4 py-2 rounded-full shadow-md">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentIndex(dotIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
              dotIndex === currentIndex ? 'bg-white scale-125' : 'bg-gray-300 hover:bg-gray-200'
            }`}
            aria-label={`Go to slide ${dotIndex + 1}`} // Good for accessibility
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;