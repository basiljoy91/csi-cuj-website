// src/components/Header.jsx
import React from 'react';
import universityLogo from '../assets/university_logo.png'; // Make sure paths are correct
import csiLogo from '../assets/csi_logo.png'; // Make sure paths are correct

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4 animate-fade-in">
      {/* White background container for logos and text */}
      <div className="bg-white rounded-lg shadow-md p-4 flex md:flex-row items-center\\ justify-center space-y-4 md:space-y-0 md:space-x-8 mx-auto">
        {/* Left section: University Logo + Text */}
        <div className="flex items-center space-x-2 sm:space-x-4"> {/* Reduced space-x for mobile, increased for sm+ */}
          <img
            src={universityLogo}
            alt="University Logo"
            className="h-32 w-auto object-contain flex-shrink-0 " // Smaller height for mobile, prevent shrinking
          />
          <h1 className="text-csi-blue text-xs sm:text-lg md:text-xl lg:text-4xl font-extrabold whitespace-nowrap text-center leading-tight">
            Computer Society Of India
            <br/> {/* Line break on mobile only */}
            Student Chapter
            <br/> {/* Line break on mobile only */}
            Central University of Jharkhandi
          </h1>
        </div>

        {/* CSI Logo - right side */}
        <img
          src={csiLogo}
          alt="CSI Logo"
          className="h-32 w-auto object-contain flex-shrink-0" // Smaller height for mobile, prevent shrinking
        />
      </div>
    </header>
  );
};

export default Header;