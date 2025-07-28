// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import ProfileCard from '../components/ProfileCard';
import universityBg from '../assets/university_bg.jpg'; // Faded background image
import whatIsCsImg from '../assets/what_is_cs_img.jpg';
import whatCsiImg from '../assets/what_csi_img.jpg';
import hodImg from '../assets/hod_img.jpg';
import vcImg from '../assets/vc_img.jpg';
import trainerImg from '../assets/trainer_img.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark-blue text-white overflow-hidden">
      {/* Faded Background University Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10" // Adjust opacity as needed
        style={{ backgroundImage: `url(${universityBg})` }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Header />

        {/* Space for Header above slider */}
        <div className="h-28 md:h-36"></div> {/* Adjust this height based on header size */}

        <main>
          <section className="container mx-auto px-4 py-8">
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
                name="Dr. Professor Kshiti Bhusan Das "
                title="Vice Chancellor, CUJ"
                description="Prof. Robert Smith is a visionary leader with a strong background in educational administration and a passion for fostering technological innovation in academia."
              />

              <ProfileCard
                image={hodImg}
                name="Dr. Subash Chandra Yadav"
                title="Head of Department, Computer Science & Engineering"
                description="Dr. Jane Doe is an accomplished academician with over 20 years of experience in computer science education and research. Her expertise lies in AI and Machine Learning."
              />
              
              <ProfileCard
                image={trainerImg}
                name="Dr. Kanojia Sindhuben Babulal"
                title="Asst. Prof. & Student Co-ordinator, CSI-CUJ"
                description="Dr.Kanojia Sindhuben Babulal is an industry expert in Full Stack Development and Cloud Computing, bringing invaluable practical insights to our student chapter."
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-csi-blue text-white py-8 px-4 md:px-8">
            <div className="container mx-auto text-center">
              <p>&copy; {new Date().getFullYear()} CSI Student Chapter CUJ. All rights reserved.</p>
              <p className="mt-2">Designed by basiljoy</p>
              {/* Add social media links or other footer content here */}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default HomePage;