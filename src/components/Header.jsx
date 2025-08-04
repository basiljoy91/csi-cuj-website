// src/components/Header.jsx
import React from 'react';
import universityLogo from '../assets/university_logo.png';
import csiLogo from '../assets/csi_logo.png';

const Header = () => {
  return (
    <header className="text-white py-4 shadow">
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 mx-auto max-w-7xl">
        {/* University Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={universityLogo}
            alt="University Logo"
            className="h-28 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Center Text */}
        <div className="text-center">
          <h1 className="text-csi-blue text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
            Computer Society Of India
            <br />
            Student Chapter
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
      </div>
    </header>
  );
};

export default Header;
