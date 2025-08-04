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

//inaug
import inaug1 from '../assets/Imageslider/Eventpage/inag1.jpg';
import inaug2 from '../assets/Imageslider/Eventpage/inag2.jpg';
import inaug3 from '../assets/Imageslider/Eventpage/inag3.jpg';

//day2
import day2a from '../assets/Imageslider/Eventpage/d.jpg';
import day2b from '../assets/Imageslider/Eventpage/g.jpg';
import day2c from '../assets/Imageslider/Eventpage/p.jpg';
import day2d from '../assets/Imageslider/Eventpage/q.jpg';

// Image arrays
const inaugurationImages = [inaug1, inaug2, inaug3];
const day1Images = [poster, day1a, day1b];
const day2Images = [day2a, day2b, day2c, day2d];

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
             The CSI Student Branch at Central University of Jharkhand was officially inaugurated on 29th November 2024. The virtual ceremony, graced by faculty and students, featured the unveiling of the CSI flag and an inspiring address by Prof. A.K. Nayak. The session highlighted the chapter’s mission, vision, and Student Council, laying the foundation for a thriving technical community on campus. </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleOpen('inauguration')}>
                Know More
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
              The first day of the <b>Two-Day National Seminar on Cybersecurity in the Age of AI and ML</b> began with the inauguration of the CSI Student Chapter at Central University of Jharkhand. Distinguished guests and experts in computer science set the tone with thought-provoking insights on the convergence of AI, ML, and security challenges. The keynote address emphasized the importance of resilient systems in an era of digital threats. Students and researchers presented papers—both online and offline—exploring innovations in secure machine learning, data privacy, and threat detection, highlighting the need for robust cybersecurity frameworks in today’s AI-driven world.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleOpen('day1')}
            >
              Know More
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
              The second day focused on domain-specific expert talks that delved into practical aspects of cybersecurity in intelligent systems. Sessions explored advanced topics such as blockchain for secure data integrity, AI-powered threat mitigation, and ethical considerations in autonomous decision-making. <br/>The technical discussions bridged the gap between academic research and real-world application, enriching the participants' understanding of digital defense strategies. The event concluded with a valedictory session that acknowledged contributions, inspired future research, and reinforced the mission to build secure and intelligent digital infrastructures.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleOpen('day2')}
            >
              Know More
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
            <h2 className="text-2xl font-bold mb-4">Inauguration of CSI CUJ Student Branch</h2>
            <div className="text-base text-justify space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <p>
                The inauguration of the CSI Student Branch at Central University of Jharkhand marked a pivotal step toward nurturing a collaborative and innovation-driven technical ecosystem within the campus.
                <b>The virtual ceremony featured the digital unveiling of the CSI flag by chief guest Prof. A.K. Nayak, symbolizing the official launch of the chapter.</b>
                <br/><br/>The session began with address by the Head of the Department and that of the CSI Counsellor, setting an enthusiastic tone for the journey ahead.
              </p>

              <p>
                A detailed presentation, outlining the mission of CSI and the vision of the newly established CUJ Chapter, alongside introduction of the Student Council members who will steer the chapter’s initiatives.
              </p>

              <p>
                <b>Prof. Nayak’s keynote address</b> motivated students to <b>embrace AI, ML, and emerging technologies</b>. While continuously evolving as learners and contributors to the computing domain.
              </p>

              <p>
                The event witnessed active participation from CSE students across all batches, reflecting a strong commitment to future activities.
                The inauguration led the foundation for fostering technical excellence, collaborative learning,
                and professional growth under the banner of CSI at CUJ.
              </p>
            </div>
          </>
        )}

        {selectedEvent === 'day1' && (
        <>
          <h2 className="text-2xl font-bold mb-4">Day 1: Seminar Inauguration & Paper Presentation</h2>
          <div className="text-base text-justify space-y-4 max-h-[70vh] overflow-y-auto pr-2">

          <p>
            The first day of the National Seminar was held at the Science Building (Academic Block-3) Auditorium, CUJ. 
            The event commenced with a welcome address by <b>Prof. S. C. Yadav</b> (Head of Department, Computer Sc. & Engineering), 
            followed by the lighting of the lamp, setting the tone for a knowledge-driven day.
          </p>

          <p >
            <b>Dignitaries Present:</b><br />
            &emsp;• <b>Prof. P. K. Panda</b>, Vice Chancellor (In-charge), CUJ<br />
            &emsp;• <b>Prof. Ajai Singh</b>, Dean, School of Engineering & Technology<br />
            &emsp;• <b>Prof. A. K. Nayak</b>, Advisor, IIBM & Former CSI President<br />
            &emsp;• <b>Prof. Ashutosh Kr. Singh</b>, Director, IIIT Bhopal
          </p>

          <p>
            <b>Keynote Speakers:</b><br />
            &emsp;• <b>Prof. Ashutosh Kumar Singh</b> IIIT Bhopal, shared his vision on the role of AI and digital technologies in driving national innovation, urging students to actively pursue interdisciplinary research.<br />
            &emsp;• <b>Prof. A. K. Nayak</b> (Former CSI President) emphasized the long-standing contribution of CSI in professional development, and the importance of ethics and leadership in tech.
          </p>

          <p>
            Following the inspiring talks, guests and participants engaged in a networking lunch, encouraging dialogue and collaboration among attendees.
          </p>

          <p>
            <b>Anchors of the day:</b><br />
            &emsp;• Aditya Ashish, President, CSI-CUJ<br />
            &emsp;• Shraddha Singh, Member, CSI-CUJ<br />
          </p>
          <p>
            <b> Camera Person of the Day:</b><br />
            • Ujit Raj Rathore, Co-Technical Secretary, CSI-CUJ<br />
            
          </p>

          <p>
            <b>Research Paper Presentations:</b><br />
            &emsp;Over 35+ papers were presented in both offline and online modes, featuring innovative research in AI, cybersecurity, and machine learning.
          </p>

          <p>
            <b>Presentation Coordinators:</b><br />
            &emsp;<u>Online Sessions:</u><br />
            &emsp;• Ritu Kumari<br />
            &emsp;• Monalisha Anand<br />
            &emsp;• Ayesha Gupta<br />
            &emsp;<u>Offline Session:</u><br />
            &emsp;• Mansi Vats
          </p>

          <p>
            <b>Session Chairs & Review Panel Included:</b><br />
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
    <h2 className="text-2xl font-bold mb-4">Day 2: Expert Talks & Valedictory Session</h2>
    <div className="text-base text-justify space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <p>
        The second day of the inaugural event hosted by the CSI Student Chapter was dedicated to the National Seminar on <b>"Recent Advances in Artificial Intelligence, Cybersecurity, and Data Science"</b>, held on 30th December 2024 at the Central University of Jharkhand.
      </p>

      <p>
        The event witnessed distinguished experts from academia and industry who shared valuable insights into cutting-edge research and technological trends. The seminar was anchored in the morning session by <b>Mansi Vats</b>, Technical Secretary, CSI-CUJ.
      </p>

      <p>
        <b>Session I: </b><br />
        &emsp;<b>Speaker:</b> Dr. Ashish Joshi, Asst. Prof., University School of Automation and Robotics, GGSIPU (East Delhi Campus).
        <br/>&emsp;<b>Topic:</b> Security in Wireless Networks and AI-driven Approaches<br />
        &emsp;Dr. Joshi discussed automation and the future of secure wireless systems using machine learning models. His session emphasized research directions in secure communications.
      </p>

      <p>
        <b>Session II:</b><br />
        <b>&emsp;Speaker:</b> Prof. Siba K. Udgata, Professor, School of Computer and Information Sciences, University of Hyderabad
        <br/><b>&emsp;Topic:</b> Smart Systems and AI in Cybersecurity<br />
        &emsp;Prof. Udgata shared practical applications of AI in sensor networks, data fusion, and cybersecurity. He highlighted the scope of interdisciplinary research.
      </p>

      <p>
        <b>Session III:</b><br />
        &emsp;<b>Speaker:</b> Dr. Bhaskar Mondal,  Assistant Professor, Department of CSE, NIT Patna<br />
        <br />&emsp;<b>Topic:</b> Lightweight Cryptography and Secure Computation<br />
        &emsp;Dr. Mondal addressed the importance of cryptographic techniques in resource-constrained environments and introduced ML-based approaches in secure systems.
      </p>

      <p>
        <b>Session IV: </b><br />
        <b>&emsp;Speaker:</b> Mr. Gautam Hazari,CTO, SEKURA Mobile Intelligence, UK<br />
        <b>&emsp;Topic:</b> Digital Identity & Passwordless Authentication<br />
        &emsp;In a virtual address, Mr. Hazari explored the global shift towards decentralized identity frameworks and security without passwords, with real-world applications.
      </p>

      <p>
        <b>Valedictory Session: </b><br />
        <b>&emsp;Anchored by:</b><br/>
        &emsp;• Apurba Das, Co-Technical Secretary, CSI-CUJ<br/>
        &emsp;• Hemant Prakash, Co-Technical Secretary, CSI-CUJ
      </p>

      <p>
      &emsp;<b>The concluding session featured reflections and concluding remarks by:</b><br />
        &emsp;• Prof. S. C. Yadav, HoD, CSE, CUJ (Convener)<br />
        &emsp;• Prof. Ajai Singh, Dean, School of Engineering, CUJ<br />
        &emsp;• Prof. Arun Kumar Padhy, Dean, R&D<br />
        &emsp;• Prof. Siba K. Udgata, Guest Speaker<br />
        &emsp;• Dr. Kanojia Sindhuben Babulal, Seminar Report Presentation
      </p>

      <p>
        <b>&emsp;Best Paper Presenter Awardees:</b><br />
        &emsp;• <b>Om Vishesh</b> for <b>AI-based Diabetic Retinopathy Diagnosis</b><br />
        &emsp;• <b>Neha Kumari</b> for <b>Cybersecurity in E-Learning</b><br />
        &emsp;• <b>Shreya Kumari</b> for<b> Quantum Computing and Cybersecurity</b>
      </p>

      <p>
        The session concluded with a <b>Vote of Thanks</b> by <b>Dr. Pushpendra Kumar</b> and the <b>National Anthem</b>, marking the end of a fruitful two-day academic celebration.
      </p>
    </div>
    </>
    )}

        </EventModal>
      )}
    </>
  );
};

export default Events;
