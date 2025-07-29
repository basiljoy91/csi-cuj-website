import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-csi-blue text-white pt-10 pb-6 px-6 md:px-20 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About CSI CUJ</h3>
          <p className="leading-relaxed">
            The CSI Student Chapter at Central University of Jharkhand fosters innovation, technical growth, and collaboration through seminars, coding events, and hands-on learning in AI, ML, cybersecurity, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/student-council" className="hover:underline">Student Council</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="https://cuj.ac.in/DCSE/CS&Edepartment.php" className="hover:underline">CSE-CUJ</a></li>  
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-5 text-xl mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
          <p>Email: <a href="mailto:csi@cuj.ac.in" className="hover:underline">csi@cuj.ac.in</a></p>
          <p>Location: Central University of Jharkhand, Cheri-Manatu, Ranchi</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} CSI Student Chapter CUJ. All rights reserved.</p>
        <p className="mt-1 text-white/70">Designed by <span className="font-semibold"></span></p>
      </div>
    </footer>
  );
};

export default Footer;
