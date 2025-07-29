// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';

import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import InfoSection from '../components/InfoSection';
import ProfileCard from '../components/ProfileCard';
import universityBg from '../assets/university_bg.jpg'; // Faded background image
import whatIsCsImg from '../assets/what_is_cs_img.jpg';
import whatCsiImg from '../assets/what_csi_img.jpg';
import hodImg from '../assets/hod_img.jpg';
import vcImg from '../assets/vc_img.jpg';
import kanojiaImg from '../assets/.jpg';
// import trainerImg from '../assets/trainer_img.jpg';  
import Footer from '../components/footer';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark-blue text-white overflow-hidden">
      {/* Faded Background University Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10" // Adjust opacity as needed
        style={{ backgroundImage: `url(${universityBg})` }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 text-justify">
        <Header />

        {/* Space for Header above slider */}
        <div className="h-44 md:h-48"></div> {/* Increased gap between header and slider */}

        <main>
          <section className="container mx-auto px-4 py-8 ">
            <ImageSlider />
          </section>

          {/* Navbar comes right after the slider */}
          <Navbar />

          {/* What is CS? Section */}
          <InfoSection
            title="What is Computer Society of India?"
            content="Computer Society of India (CSI) is the first and largest body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals.
           Having 488 student branches and rooted firmly at 73 different locations, CSI has plans of opening more chapters & activity centers in smaller towns of the country. The idea is to spread the knowledge, and provide opportunities to as many interested as possible. 
            We Recognize Innovations And Indigenous Developments In The Field Of Information Technology In India. CSI Awards Are Instituted To Acknowledge And Motivate Individuals And Organizations Working In The ICT Field."
            image={whatIsCsImg}
            imageOnRight={false} // Image on left, content on right
          />

          {/* What CSI Here? Section */}
          <InfoSection
            title="What CSI Student Chapter CUJ Offers?"
            content="The CSI Student Chapter at Central University of Jharkhand (CUJ) is dedicated to fostering a vibrant community for aspiring computer professionals. We provide a platform for students to enhance their technical skills, network with peers and industry experts, and stay updated with the latest advancements in computer science. Through workshops, seminars, coding competitions, and guest lectures, we aim to bridge the gap between academic knowledge and practical industry demands. Our initiatives encourage collaborative learning, problem-solving, and innovation, preparing students for successful careers in the ever-evolving tech landscape. We organize regular events that cover diverse topics, including web development, app development, cybersecurity, data science, and competitive programming. The chapter also facilitates opportunities for students to participate in national-level CSI events, presenting their projects and gaining valuable exposure. We believe in nurturing not just technical proficiency but also leadership and teamwork qualities among our members."
            image={whatCsiImg}
            imageOnRight={true} // Image on right, content on left
          />

          {/* What is CS? Section */}
          <InfoSection
            title="What is Computer Science?"
            content="Computer science is the study of computation and information. Computer science deals with theory of computation, algorithms, computational problems and the design of computer systems hardware and software. The field broadly encompasses its theoretical foundations, algorithms, and practical techniques for their implementation and application. Computer scientists work across various domains, from artificial intelligence and machine learning to cybersecurity, data science, and software engineering, impacting virtually every aspect of modern life. It's a dynamic and evolving field that drives innovation and technological advancement globally. This discipline involves understanding how computers work, how to program them, and how to use them to solve complex problems. It includes topics like data structures, algorithms, programming languages, computer architecture, operating systems, and software development methodologies. Students in computer science often engage in problem-solving, logical thinking, and creative design to develop new technologies and applications."
            image={whatIsCsImg}
            imageOnRight={false} // Image on left, content on right
          />

          {/* What CSI Here? Section */}
          <InfoSection
            title="What CSI Student Chapter CUJ Offers?"
            content="The CSI Student Chapter at Central University of Jharkhand (CUJ) is dedicated to fostering a vibrant community for aspiring computer professionals. We provide a platform for students to enhance their technical skills, network with peers and industry experts, and stay updated with the latest advancements in computer science. Through workshops, seminars, coding competitions, and guest lectures, we aim to bridge the gap between academic knowledge and practical industry demands. Our initiatives encourage collaborative learning, problem-solving, and innovation, preparing students for successful careers in the ever-evolving tech landscape. We organize regular events that cover diverse topics, including web development, app development, cybersecurity, data science, and competitive programming. The chapter also facilitates opportunities for students to participate in national-level CSI events, presenting their projects and gaining valuable exposure. We believe in nurturing not just technical proficiency but also leadership and teamwork qualities among our members."
            image={whatCsiImg}
            imageOnRight={true} // Image on right, content on left
          />
          
          {/* Leadership/Faculty Section */}
          <section className="py-16 px-4 md:px-8 bg-dark-blue text-white">
            <div className="container mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-csi-blue mb-4 animate-fade-in">Our Guiding Pillars</h2>
              <p className="text-lg text-gray-300 animate-fade-in">Meet the esteemed individuals leading our initiatives and shaping the future of our students.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ProfileCard
                image={vcImg}
                name=" Prof.(Dr.) Kshiti Bhusan Das "
                title="Vice Chancellor, CUJ"
                description="Professor Kshiti Bhusan Das, M.Com, Ph.D and D.Litt. (Commerce) from Utkal University, Bhubaneswar. He is a National Fellow of Indian Council of Social Science Research (ICSSR), New Delhi. He is an esteemed member of ICSSR’s Collegium of Eminent Social Scientists and a member of the Advisory Committee of ERC-ICSSR."
              />

              <ProfileCard
                image={hodImg}
                name="Prof.(Dr.) Subash Chandra Yadav"
                title="Head of Department, Computer Science & Engineering"
                description="Dr. S.C. Yadav is a senior academician and researcher as well in the field of Computer Science and Engineering.  Apart from carrying academic responsibility he has contributed to Computer Society of India (CSI) as a National Chairman Education and Research (Division -V) for the year 2019-21 and founder Chairman CSI- Varanasi Chapter; And ISCA in the capacity of Sectional Member, Sectional Recorder, and also Sectional President for the year 2013-14."
              />
              
              <ProfileCard
                image={kanojiaImg}
                name="Dr. Kanojia Sindhuben Babulal"
                title="Asst. Prof. & Student Co-ordinator, CSI-CUJ"
                description="Dr. Kanojia Sindhuben Babulal is an Assistant Professor in Department of Computer Science and Engineering at Central University of Jharkhand, Ranchi, India. She received her Ph.D in Computer Science in 2012 from University of Allahabad. Her area of interest includes Cross layer designs, Energy Efficient Wireless Networks, MANETs, Image Processing, Machine Learning."
              />
            </div>
          </section>
          <Footer/>
        </main>
      </div>
    </div>
  );
};

export default HomePage;