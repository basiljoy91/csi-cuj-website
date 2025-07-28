import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentCouncil from './pages/StudentCouncil';
import Event from './pages/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-council/:year" element={<StudentCouncil />} />
        <Route path="/events/:year" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
