import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import ImageSlider from '../components/ImageSlider';

// 🔧 Temporary placeholder arrays (fill these with real imports later)
const inaugurationImages = []; // e.g., [inauguration1, inauguration2]
const day1Images = [];         // e.g., [day1_1, day1_2]
const day2Images = [];         // e.g., [day2_1, day2_2]


const Event = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="bg-gray-50 text-gray-800">
      {/* 🟦 Page Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-800">CSI-CUJ 2024 Events</h1>
    
      </div>

      {/* 🟨 Inauguration Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Inauguration Ceremony</h2>
        <ImageSlider images={inaugurationImages} />
        <p className="mt-6 text-justify text-gray-700 leading-relaxed">
          The grand inauguration of the national seminar began with a welcome address by distinguished faculty,
          followed by enlightening speeches from guest speakers. The event set the tone for two days of
          thought-provoking discussions on the intersection of Cybersecurity, Artificial Intelligence, and Machine Learning.
        </p>
      </section>

      {/* 🟩 Day 1 Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 bg-gray-100 rounded-xl shadow-md mt-10">
            <p className="mt-2 text-lg text-gray-600">A Two-Day National Seminar on Cybersecurity Using AI/ML</p>
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Day 1 - Seminar Highlights</h2>
        <ImageSlider images={day1Images} />
        <p className="mt-6 text-justify text-gray-700 leading-relaxed">
          Day 1 of the seminar featured technical paper presentations and keynote sessions by experts in
          Cybersecurity. Topics included secure network design, AI-driven threat detection, and ethical hacking.
          The audience engaged actively with the speakers, fostering a rich academic dialogue.
        </p>
      </section>

      {/* 🟦 Day 2 Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Day 2 - Seminar Highlights</h2>
        <ImageSlider images={day2Images} />
        <p className="mt-6 text-justify text-gray-700 leading-relaxed">
          The final day included a hands-on workshop on AI in cybersecurity, followed by a panel discussion on
          future career prospects. Participants shared their insights and experiences. The event concluded with
          a formal vote of thanks and certificate distribution to participants and volunteers.
        </p>
      </section>


       <Footer /> 
    </div>
    </>
  );
};

export default Event;
