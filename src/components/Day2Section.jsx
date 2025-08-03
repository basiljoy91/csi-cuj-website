// src/components/Day2Section.jsx
import React from 'react';

const Day2Section = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Day 2: Workshops & Showcase</h2>
      <p className="text-gray-700 mb-4">
        The second day featured engaging hands-on workshops and showcased innovative projects by students.
      </p>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>🔹 Workshop on Python for Data Visualization</li>
        <li>🔹 Live demo of ML projects by CSI Club members</li>
        <li>🔹 Panel discussion and prize distribution ceremony</li>
      </ul>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/day2_1.jpg" alt="Day 2 - 1" className="rounded shadow" />
          <img src="/images/day2_2.jpg" alt="Day 2 - 2" className="rounded shadow" />
          <img src="/images/day2_3.jpg" alt="Day 2 - 3" className="rounded shadow" />
        </div>
      </div>
    </div>
  );
};

export default Day2Section;
