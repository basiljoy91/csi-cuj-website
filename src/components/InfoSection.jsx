// src/components/InfoSection.jsx
import React from 'react';

const InfoSection = ({ title, content, image, imageOnRight = false }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white text-dark-blue animate-fade-in">
      <div className={`container mx-auto flex flex-col md:flex-row items-center gap-8 ${imageOnRight ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-csi-blue">{title}</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {content}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;