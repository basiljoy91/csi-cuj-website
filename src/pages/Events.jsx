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
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12">
        <div className="md:w-1/2 w-full">
          <EventImageSlider images={inaugurationImages} />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">CSI Student Chapter Inauguration</h2>
          <p className="text-lg text-justify">
            The inauguration of CSI Student Chapter, CUJ on <b>29th December, 2024</b>, marked the beginning of a new journey filled with learning, collaboration, and innovation in the field of Computer Science.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => handleOpen('inauguration')}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Day 1 of Seminar */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-6 px-6 py-12 bg-gray-100">
        <div className="md:w-1/2 w-full">
          <EventImageSlider images={day1Images} />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">Day 1 – National Seminar</h2>
          <p className="text-lg text-justify">
            Sessions on cybersecurity, AI and blockchain empowered students with cutting-edge knowledge and current industry trends.
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
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12">
        <div className="md:w-1/2 w-full">
          <EventImageSlider images={day2Images} />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">Day 2 – National Seminar</h2>
          <p className="text-lg text-justify">
            Hands-on workshops, a thought-provoking panel discussion, and the valedictory ceremony concluded the event successfully.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => handleOpen('day2')}
          >
            Learn More
          </button>
        </div>
      </section>

      <Footer />

      {/* Modal Section */}
      {selectedEvent && (
        <EventModal onClose={handleClose}>
          {selectedEvent === 'inauguration' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Inauguration – Full Description</h2>
              <p className="text-lg text-justify">
                The CSI Student Chapter at Central University of Jharkhand was inaugurated on <b>29th December, 2024</b>. The ceremony was graced by distinguished guests:<br />
                <b>Chief Guest:</b> Prof. Ashutosh Kr. Singh (Director, IIIT Bhopal)<br />
                <b>Guest of Honour:</b> Prof. A. K. Nayak (Advisor, IIBM & Former CSI President)<br />
                <b>Special Address:</b> Prof. P. K. Panda (VC In-charge, CUJ)<br />
                The event marked the beginning of a structured platform for students to explore cutting-edge technologies, attend workshops, and participate in national-level activities under CSI.
              </p>
            </>
          )}
          {selectedEvent === 'day1' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Day 1 – Full Description</h2>
              <p className="text-lg text-justify">
                <b>Inaugurated by:</b> Prof. P.K. Panda, Vice Chancellor(in-charge), CUJ<br />
                <b>Chief Guest:</b> Prof. Ashutosh Kr. Singh, Director, IIIT Bhopal<br />
                <b>Guest of Honour:</b> Prof. A. K. Nayak, Advisor, IIBM Group & Former President, CSI<br />
                <b>Technical Sessions:</b><br />
                &emsp;• The future of cybersecurity in AI-driven ecosystems<br />
                &emsp;• Threat intelligence through ML algorithms<br />
                &emsp;• Securing digital infrastructure via blockchain<br />
                &emsp;• Cloud security strategies<br />
                &emsp;• Government and industrial perspectives on data safety
              </p>
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
