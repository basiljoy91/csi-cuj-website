// src/components/Header.jsx
import React from 'react';
import universityLogo from '../assets/university_logo.png';
import csiLogo from '../assets/csi_logo.png';

const Header = () => {
  return (
    <header className="text-white py-4 shadow">
      <div className="bg-white rounded-lg shadow-md px-4 py-6 flex flex-row items-center justify-between space-x-2 sm:space-x-4 mx-auto">
        
        {/* Left: University Logo */}
        <img
          src={universityLogo}
          alt="University Logo"
          className="h-12 sm:h-20 lg:h-32 w-auto object-contain flex-shrink-0"
        />

        {/* Center: Text */}
        <h1 className="text-csi-blue text-sm sm:text-base md:text-2xl lg:text-4xl font-extrabold text-center leading-tight flex-1 px-2">

          Computer Society Of India,
          <br />
          Student Chapter,
          <br />
          Central University of Jharkhand, Ranchi
        </h1>

        {/* Right: CSI Logo */}
        <img
          src={csiLogo}
          alt="CSI Logo"
          className="h-12 sm:h-20 lg:h-32 w-auto object-contain flex-shrink-0"
        />
      </div>
    </header>
  );
};

export default Header;
