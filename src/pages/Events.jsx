import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import EventImageSlider from '../components/EventImageSlider';
import EventModal from '../components/EventModal';

// Images
import poster from '../assets/Imageslider/Eventpage/poster.jpg';
import day1a from '../assets/Imageslider/Eventpage/day1a.jpg';
import day1b from '../assets/Imageslider/Eventpage/day1b.jpg';
import squareImg2_2 from '../assets/square_img2_2.jpg';
import squareImg2_3 from '../assets/square_img2_3.jpg';
import squareImg3_1 from '../assets/square_img3_1.jpg';
import squareImg3_3 from '../assets/square_img3_3.jpg';
import squareImg4_1 from '../assets/square_img4_1.jpg';
import squareImg4_2 from '../assets/square_img4_2.jpg';
import squareImg4_3 from '../assets/square_img4_3.jpg';

// Image arrays
const inaugurationImages = [poster, , ];
const day1Images = [poster, day1a, day1b];
const day2Images = [squareImg3_3, squareImg4_1, squareImg4_2, squareImg4_3];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpen = (eventKey) => {
    setSelectedEvent(eventKey);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <Header />
      <Navbar />


      {/* CSI Student Chapter Inauguration */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-300 mx-4 my-8 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:brightness-95">
        <section className="px-6 pt-16 pb-6 bg-white text-center">
          <h4 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            <b>CSI Student Chapter Inauguration</b>
          </h4>
          <p className="text-gray-600 text-lg mb-8">
            Central University of Jharkhand | <b>29th December, 2024</b>
          </p>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12">
          <div className="md:w-1/2 w-full">
            <EventImageSlider images={inaugurationImages} />
          </div>
          <div className="md:w-1/2 w-full">
            {/* <h2 className="text-3xl font-bold mb-4">CSI Student Chapter Inauguration</h2> */}
            <p className="text-lg text-justify">
              The inauguration of CSI Student Chapter, CUJ on <b>29th December, 2024</b>, marked the beginning of a new journey filled with learning, collaboration, and innovation in the field of Computer Science.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleOpen('inauguration')}>
                Learn More
            </button>
          </div>
        </section>
      </div>

{/* 🔻 Divider Between Inauguration and Seminar
<div className="w-full px-6 py-4 bg-gradient-to-r from-indigo-100 to-blue-100 border-l-4 border-indigo-500 shadow-sm my-6 rounded-md">
  <h3 className="text-xl md:text-2xl font-semibold text-indigo-800 text-center">
    
  </h3>
</div> */}

{/* Start of Seminar Section */}
<div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-300 mx-4 my-8 overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:brightness-95">
  <section className="px-6 pt-16 pb-6 bg-white text-center">
    <h4 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
      <b>Two-Day National Seminar on</b> <br className="md:hidden" />
      <span className="text-gray-600"><b>Cybersecurity in the Age of AI and ML</b></span>
    </h4>
    <p className="text-gray-600 text-lg mb-8">
      Organized by CSI Student Chapter – CUJ | <b>27th & 28th February 2025</b>
    </p>
  </section>

  {/* Day 1 of Seminar */}
  <section className="flex flex-col md:flex-row-reverse items-center gap-6 px-6 py-12 bg-gray-100">
    <div className="md:w-1/2 w-full">
      <EventImageSlider images={day1Images} />
    </div>
    <div className="md:w-1/2 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-black-800 mb-2">
        Day 1: Seminar Inauguration & Paper Presentation
      </h2>
      <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-4">
        27th February, 2025
      </h3>
      <p className="text-lg text-justify">
        The first day of the Two-Day National Seminar on Cybersecurity in the Age of AI and ML began with the inauguration of the CSI Student Chapter at Central University of Jharkhand. Distinguished guests and experts in computer science set the tone with thought-provoking insights on the convergence of AI, machine learning, and security challenges. The keynote address emphasized the importance of resilient systems in an era of digital threats. Students and researchers presented papers—both online and offline—exploring innovations in secure machine learning, data privacy, and threat detection, highlighting the need for robust cybersecurity frameworks in today’s AI-driven world.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => handleOpen('day1')}
      >
        Learn More
      </button>
    </div>
  </section>

  {/* Day 2 of Seminar */}
  <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 bg-white">
    <div className="md:w-1/2 w-full">
      <EventImageSlider images={day2Images} />
    </div>
    <div className="md:w-1/2 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-black-800 mb-2">
        Day 2: Expert Talks & Valedictory Session
      </h2>
      <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-4">
        28th February, 2025
      </h3>
      <p className="text-lg text-justify">
        The second day focused on domain-specific expert talks that delved into practical aspects of cybersecurity in intelligent systems. Sessions explored advanced topics such as blockchain for secure data integrity, AI-powered threat mitigation, and ethical considerations in autonomous decision-making. The technical discussions bridged the gap between academic research and real-world application, enriching the participants' understanding of digital defense strategies. The event concluded with a valedictory session that acknowledged contributions, inspired future research, and reinforced the mission to build secure and intelligent digital infrastructures.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => handleOpen('day2')}
      >
        Learn More
      </button>
    </div>
  </section>
</div>

      <Footer />

      {/* Modal Section */}
      {selectedEvent && (
        <EventModal onClose={handleClose}>
          {selectedEvent === 'inauguration' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Inauguration – Full Description</h2>
              <p className="text-lg text-justify">
                The CSI Student Chapter at Central University of Jharkhand was inaugurated on <b>29th December,2024</b>. The ceremony was graced by distinguished guests:<br />
                <b>Chief Guest:</b> Prof. Ashutosh Kr. Singh (Director, IIIT Bhopal)<br />
                <b>Guest of Honour:</b> Prof. A. K. Nayak (Advisor, IIBM & Former CSI President)<br />
                <b>Special Address:</b> Prof. P. K. Panda (VC In-charge, CUJ)<br />
                The event marked the beginning of a structured platform for students to explore cutting-edge technologies, attend workshops, and participate in national-level activities under CSI.
              </p>
            </>
          )}
              {selectedEvent === 'day1' && (
      <>
        <h2 className="text-2xl font-bold mb-4">🔹 Day 1 – National Seminar (27th February 2025)</h2>
        <div className="text-base text-justify space-y-4 max-h-[70vh] overflow-y-auto pr-2">

          <p>
            The first day of the National Seminar was held at the Science Academic Block Auditorium, CUJ Manatu Campus. 
            The event commenced with a welcome address by <b>Prof. S. C. Yadav</b> (Head, Department of Computer Science and Engineering), 
            followed by the lighting of the lamp, setting the tone for a knowledge-driven day.
          </p>

          <p>
            <b>👥 Dignitaries Present:</b><br />
            • Prof. K. B. Das – Hon’ble Vice Chancellor, CUJ<br />
            • Prof. P. K. Panda – Vice Chancellor (In-charge), CUJ<br />
            • Prof. Ajai Singh – Dean, School of Engineering & Technology<br />
            • Prof. A. K. Nayak – Advisor, IIBM & Former CSI President<br />
            • Prof. Ashutosh Kr. Singh – Director, IIIT Bhopal
          </p>

          <p>
            <b>🎤 Keynote Speakers:</b><br />
            • <b>Prof. Ashutosh Kumar Singh</b> (IIIT Bhopal) shared his vision on the role of AI and digital technologies in driving national innovation, urging students to actively pursue interdisciplinary research.<br />
            • <b>Prof. A. K. Nayak</b> (Former CSI President) emphasized the long-standing contribution of CSI in professional development, and the importance of ethics and leadership in tech.
          </p>

          <p>
            Following the inspiring talks, guests and participants engaged in a networking lunch, encouraging dialogue and collaboration among attendees.
          </p>

          <p>
            <b>🎙️ Anchors of the Day:</b><br />
            • Aditya Ashish (President, Student Council)<br />
            • Shraddha Singh (Member, CSI Student Chapter)<br />
            They maintained the flow of the program with confidence and clarity.
          </p>

          <p>
            <b>📑 Research Paper Presentations:</b><br />
            Over 35 papers were presented in both offline and online modes, featuring innovative research in AI, cybersecurity, and machine learning.
          </p>

          <p>
            <b>🧾 Presentation Coordinators:</b><br />
            <u>Online Sessions:</u><br />
            • Ritu Kumari<br />
            • Monalisha Anand<br />
            • Ayesha Gupta<br />
            <u>Offline Session:</u><br />
            • Mansi Vats
          </p>

          <p>
            These coordinators ensured the smooth execution of sessions—managing time, presenters, and technical arrangements with precision and professionalism.
          </p>

          <p>
            <b>👨‍🏫 Session Chairs & Review Panel Included:</b><br />
            Experts from institutions like VIT Vellore, IIIT Bhopal, NIAMT Ranchi, and other esteemed universities served as chairs and reviewers, offering valuable feedback.
          </p>

          <p>
            The day concluded with a Vote of Thanks by <b>Dr. Kanojia Sindhuben Babubal</b>, followed by the National Anthem, bringing the day to a dignified close.
          </p>
        </div>
      </>
    )}

          {selectedEvent === 'day2' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Day 2 – Full Description</h2>
              <p className="text-lg text-justify">
                Day 2 included hands-on sessions on AI tools, a panel discussion on ethical use of AI, and the concluding ceremony.<br />
                <b>Key Highlights:</b><br />
                &emsp;• Hands-on session: AI-based malware detection<br />
                &emsp;• Workshop: Ethical hacking in modern web apps<br />
                &emsp;• Panel: Bridging academia and industry in AI Security<br />
                &emsp;• Certificate distribution and valedictory remarks
              </p>
            </>
          )}
        </EventModal>
      )}
    </>
  );
};

export default Events;
