// src/components/Header.jsx
import React from 'react';
import universityLogo from '../assets/university_logo.png';
import csiLogo from '../assets/csi_logo.png';
import universityLogo from '../assets/university_logo.png';
import csiLogo from '../assets/csi_logo.png';

const Header = () => {
  return (
    <header className="text-white py-4 shadow">
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 mx-auto max-w-7xl">
        {/* University Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
    <header className="text-white py-4 shadow">
      {/* White background container for logos and text */}
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mx-auto">
        {/* Left section: University Logo + Text */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={universityLogo}
            alt="University Logo"
            className="h-32 w-auto object-contain flex-shrink-0"
          />
          <h1 className="text-csi-blue text-xs sm:text-lg md:text-xl lg:text-4xl font-extrabold whitespace-nowrap text-center leading-tight">
            className="h-28 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Center Text */}
        <div className="text-center">
          <h1 className="text-csi-blue text-base sm:text-lg md:text-2xl lg:text-4xl font-extrabold leading-snug">
            Computer Society Of India
            <br />
            <br />
            Student Chapter
            <br />
            <br />
            Central University of Jharkhand
          </h1>
        </div>

        {/* CSI Logo */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={csiLogo}
            alt="CSI Logo"
            className="h-28 md:h-32 w-auto object-contain"
          />
        </div>
        {/* CSI Logo - right side */}
        <img
          src={csiLogo}
          alt="CSI Logo"
          className="h-32 w-auto object-contain flex-shrink-0"
        />
      </div>
    </header>
  );
};

export default Header;

