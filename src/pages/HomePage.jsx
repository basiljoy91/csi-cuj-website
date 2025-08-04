// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import InfoSection from '../components/InfoSection';
import ProfileCard from '../components/ProfileCard';
import CSEcuj from '../assets/Homepage/university_bg.jpg';
import CUJimage from '../assets/Homepage/csecuj.jpg';
import CSiLogo from '../assets/Homepage/csilogo.png';
import hodImg from '../assets/hod_img.jpg';
import vcImg from '../assets/vc_img.jpg';
import kanojiaImg from '../assets/kanojia.jpg';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark-blue text-white overflow-hidden">

      {/* Content Overlay */}
      <div className="relative z-10 text-justify">
        <Header />

        {/* Space for Header above slider */}
        <div className="h-38 md:h-38"></div> {/* h for mobile, md:h desktop */}

        <main>
          <section className="container mx-auto px-4 py-8">
            <ImageSlider />
          </section>

          {/* Navbar comes right after the slider */}
          <Navbar />

          {/* What is CS? Section */}
          <InfoSection
            title="What is Computer Society of India?"
            content={
              <>
                <b>Computer Society of India (CSI)</b>  is the first and largest body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals.
                <br/><br/>Having <b>488 student branches</b> and rooted firmly at <b>73 different locations</b>, CSI has plans of opening more chapters & activity centers in smaller towns of the country. The idea is to spread the knowledge, and provide opportunities to as many interested as possible. 
                <br/><br/>We Recognize Innovations And Indigenous Developments In The Field Of Information Technology In India. CSI Awards Are Instituted To Acknowledge And Motivate Individuals And Organizations Working In The ICT Field.
              </>
          }
            image={CSiLogo}
            imageOnRight={false}
          />

          {/* CUJ intro section */}
          <InfoSection
            title="Central University of Jharkhand, Ranchi"
            content={ 
              <>
                The President of India gave assent to The Central Universities Act, 2009 that envisages establishing and incorporating universities for teaching and research in the various states.<br/><br/>      
                The Central University of Jharkhand cameinto being under this Act on 1st of March, 2009. The Visitor of the Central University of Jharkhand, Her Excellency, Shrimati Pratibha Devisingh Patil, appointed Dr. Darlando T. Khathing, an internationally renowned scientist and a distinguished academic administrator, as its first Vice Chancellor.
                <br/><br/><b>VISION:</b> To be a flagship university firmly rooted in Bharatiya Culture and its rich Spiritual legacy; fostering an open, rational and scientific temprament for a better world  
              </>
              }
            image={CSEcuj}
            imageOnRight={true}
          />

          {/* DEpartment of CSE, CUJ */}
          <InfoSection
            title="Department of Computer Science & Engineering, CUJ"
            content={
            <>
              Department of Computer Science and Engineering is at the heart of the Central University of Jharkhand, preparing graduates for career leadership; taking up interdisciplinary research in academia and high technology industry responsibilities alike. The department of Computer Science and Engineering started with the vision to pursue digital transformation of the social, geographical and economic landscape, narrowing the gap of conventional wisdom through computing interfaces.
              <br/><br/><b>Vision:</b> To proactively enable learners as leading computer scientists and engineers through a cutting edge learning experience that fosters holistic development for promoting professional & academic excellence in pioneering the advancements in technology enabled socio-economic upliftment.
            </>
            }
            image={CUJimage}
            imageOnRight={false}
          />
          
          {/* Leadership/Faculty Section */}
          <section className="py-16 px-4 md:px-8 bg-dark-blue text-white">
            <div className="container mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-csi-blue mb-4">Our Guiding Pillars</h2>
              <p className="text-lg text-gray-300">Meet the esteemed individuals leading our initiatives and shaping the future of our students.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ProfileCard
                image={vcImg}
                name=" Prof.(Dr.) Kshiti Bhusan Das "
                title="Vice Chancellor, CUJ"
                description="Professor Kshiti Bhusan Das, M.Com, Ph.D and D.Litt. (Commerce) from Utkal University, Bhubaneswar. He is a National Fellow of Indian Council of Social Science Research (ICSSR), New Delhi. He is an esteemed member of ICSSR's Collegium of Eminent Social Scientists and a member of the Advisory Committee of ERC-ICSSR."
              />

              <ProfileCard
                image={hodImg}
                name="Prof.(Dr.) Subash Chandra Yadav"
                title="Head of Department, Computer Science & Engineering"
                description="Dr. S.C. Yadav is a senior academician and researcher as well in the field of Computer Science and Engineering.  Apart from carrying academic responsibility he has contributed to Computer Society of India (CSI) as a National Chairman Education and Research for the year 2019-21 and founder Chairman CSI- Varanasi Chapter."
              />
              
              <ProfileCard
                image={kanojiaImg}
                name="Dr. Kanojia Sindhuben Babulal"
                title="Asst. Prof. &  Student Branch Coordinator, CSI-CUJ"
                description="Dr. Kanojia Sindhuben Babulal is an Asst. Professor in Department of Computer Science and Engineering at CUJ, Ranchi. She received her Ph.D in Computer Science in 2012 from University of Allahabad. Her area of interest includes Cross layer designs, Energy Efficient Wireless Networks, MANETs, Image Processing, ML."
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