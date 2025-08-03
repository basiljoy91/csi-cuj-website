// src/components/EventModal.jsx
import React from 'react';

const EventModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-700 hover:text-red-600 text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default EventModal;
