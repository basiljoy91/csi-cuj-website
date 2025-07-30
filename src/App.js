import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentCouncil from './pages/StudentCouncil';
import Event from './pages/Events';
import ContactUsPage from './pages/ContactUs';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-council/:year" element={<StudentCouncil />} />
        <Route path="/events/:year" element={<Event />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
