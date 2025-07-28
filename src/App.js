import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentCouncil from './pages/StudentCouncil'; // Make sure this exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-council/:year" element={<StudentCouncil />} />
        {/* You can add similar routes for membership and events if needed */}
      </Routes>
    </Router>
  );
}

export default App;
