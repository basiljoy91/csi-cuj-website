import React, { useState } from 'react';
import {FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:csi@cuj.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

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
            <li><a href="/" className="hover:underline transition-colors duration-200">Home</a></li>
            <li><a href="/student-council" className="hover:underline transition-colors duration-200">Student Council</a></li>
            <li><a href="/events" className="hover:underline transition-colors duration-200">Events</a></li>
            <li><a href="/contact" className="hover:underline transition-colors duration-200">Contact</a></li>
            <li><a href="https://cuj.ac.in/DCSE/CS&Edepartment.php" className="hover:underline transition-colors duration-200">CSE-CUJ</a></li>  
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          {/* email icon and address */}
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-base" />
            <a
              href="mailto:csi@cuj.ac.in"
              className="hover:underline transition-colors duration-200"
            >
              csi@cuj.ac.in
            </a>
          </p>
          <br />
          {/* address icon and location */}
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              Deptt. of CSE,
              Central University of Jharkhand,<br />
              Cheri-Manatu, Ranchi
            </span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} CSI Student Chapter CUJ. All rights reserved.</p>
        <p className="mt-1 text-white/70">Designed by <span className="font-semibold">basiljoy</span></p>
      </div>
    </footer>
  );
};

export default Footer;
