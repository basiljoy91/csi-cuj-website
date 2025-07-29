import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import EventImageSlider from '../components/EventImageSlider';

// Import images for each event slider
import squareImg1_1 from '../assets/square_img1_1.jpg';
import squareImg1_2 from '../assets/square_img1_2.jpg';
import squareImg2_1 from '../assets/square_img2_1.jpg';
import squareImg2_2 from '../assets/square_img2_2.jpg';
import squareImg2_3 from '../assets/square_img2_3.jpg';
import squareImg3_1 from '../assets/square_img3_1.jpg';
import squareImg3_3 from '../assets/square_img3_3.jpg';
import squareImg4_1 from '../assets/square_img4_1.jpg';
import squareImg4_2 from '../assets/square_img4_2.jpg';
import squareImg4_3 from '../assets/square_img4_3.jpg';

// Image arrays for each section
const inaugurationImages = [squareImg1_1, squareImg1_2, squareImg2_1];
const day1Images = [squareImg2_2, squareImg2_3, squareImg3_1];
const day2Images = [squareImg3_3, squareImg4_1, squareImg4_2, squareImg4_3];

const Events = () => {
  return (
    <>
    <Header/>
    <Navbar />

      {/* CSI Student Chapter Inauguration */}
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12">
        <div className="md:w-1/2 w-full">
          <EventImageSlider images={inaugurationImages} />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">CSI Student Chapter Inauguration</h2>
          <p className="text-lg text-justify">
            The inauguration marked the beginning of a new journey in technological collaboration and student empowerment. Dignitaries from the CSI council graced the occasion...
          </p>
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
            Day 1 featured keynote sessions from cybersecurity experts and student paper presentations. It sparked insightful discussions and technical learning...
          </p>
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
            Day 2 included hands-on sessions and a panel discussion on AI-driven security. The seminar concluded with certificate distribution and future collaboration goals...
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Events;
