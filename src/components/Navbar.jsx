// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const handleDropdownToggle = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const offset = navbarRef.current.offsetTop;
        setIsSticky(window.pageYOffset > offset);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Membership',
      path: '/membership',
      dropdown: ['2024–2025', 'University Membership'],
      dropdownPath: '/membership/',
    },
    {
      name: 'Events',
      path: '/events',
      dropdown: ['2024–2025'],
      dropdownPath: '/events/',
    },
    {
      name: 'Student Council',
      path: './StudentCouncil',
      dropdown: ['2024–2025'],
      dropdownPath: '/student-council/',
    },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`bg-csi-blue text-white p-4 transition-all duration-300 z-50 text-lg ${
        isSticky ? 'fixed top-0 left-0 right-0 shadow-lg animate-slide-down' : 'relative'
      } animate-slide-up`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex flex-grow justify-center items-center space-x-8 w-full text-lg">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                <button
                  className="py-2 px-4 text-lg hover:bg-white hover:text-csi-blue rounded-md transition-colors duration-300 focus:outline-none flex items-center"
                  tabIndex={0}
                >
                  {item.name}
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 top-full w-48 bg-white text-csi-blue rounded-md shadow-lg origin-top-left hidden group-hover:block z-50 pointer-events-auto text-lg">
                  {item.dropdown.map((year) => (
                    <li key={year}>
                      {year === 'University Membership' ? (
                        <a
                          href="https://cuj.ac.in/DCSE/files/membership_csi.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-lg hover:bg-csi-blue hover:text-white transition-colors duration-300"
                        >
                          {year}
                        </a>
                      ) : (
                        <Link
                          to={`${item.dropdownPath}${year}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-lg hover:bg-csi-blue hover:text-white transition-colors duration-300"
                        >
                          {year}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="py-2 px-4 text-lg hover:bg-white hover:text-csi-blue rounded-md transition-colors duration-300"
                  onClick={closeAllDropdowns}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Nav Items */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col space-y-2 text-lg">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.name.toLowerCase().replace(' ', '-'))}
                    className="w-full text-left py-2 px-4 text-lg hover:bg-white hover:text-csi-blue rounded-md transition-colors duration-300 focus:outline-none flex justify-between items-center"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        dropdownOpen === item.name.toLowerCase().replace(' ', '-') ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen === item.name.toLowerCase().replace(' ', '-') && (
                    <ul className="bg-gray-100 text-csi-blue rounded-md shadow-inner py-1 mt-2 animate-fade-in text-lg">
                      {item.dropdown.map((year) => (
                        <li key={year}>
                          {year === 'University Membership' ? (
                            <a
                              href="https://cuj.ac.in/DCSE/files/membership_csi.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                closeAllDropdowns();
                                setIsMenuOpen(false);
                              }}
                              className="block px-4 py-2 text-lg hover:bg-csi-blue hover:text-white transition-colors duration-300"
                            >
                              {year}
                            </a>
                          ) : (
                            <Link
                              to={`${item.dropdownPath}${year}`}
                              onClick={() => {
                                closeAllDropdowns();
                                setIsMenuOpen(false);
                              }}
                              className="block px-4 py-2 text-lg hover:bg-csi-blue hover:text-white transition-colors duration-300"
                            >
                              {year}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 px-4 text-lg hover:bg-white hover:text-csi-blue rounded-md transition-colors duration-300"
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
