// src/components/Day1Section.jsx
import React from 'react';

const Day1Section = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Day 1: Seminar & Sessions</h2>
      <p className="text-gray-700 mb-4">
        The first day kicked off with a warm inauguration ceremony attended by university dignitaries,
        followed by insightful sessions from industry and academic experts.
      </p>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>🔹 Introduction to Artificial Intelligence by Prof. Sharma</li>
        <li>🔹 Career in Data Science: Industry Perspective</li>
        <li>🔹 Interactive Q&A with students and researchers</li>
      </ul>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/day1_1.jpg" alt="Day 1 - 1" className="rounded shadow" />
          <img src="/images/day1_2.jpg" alt="Day 1 - 2" className="rounded shadow" />
          <img src="/images/day1_3.jpg" alt="Day 1 - 3" className="rounded shadow" />
        </div>
      </div>
    </div>
  );
};

export default Day1Section;
