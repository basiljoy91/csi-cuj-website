// src/components/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ image, name, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 animate-slide-up">
      <img src={image} alt={name} className="w-full h-56 object-cover object-center" />
      <div className="p-6 text-center text-dark-blue">
        <h3 className="text-2xl font-bold text-csi-blue mb-2">{name}</h3>
        <p className="text-md text-gray-600 mb-4">{title}</p>
        <p className="text-sm leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;