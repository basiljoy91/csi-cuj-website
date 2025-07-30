// src/pages/ContactUs.jsx
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// Import profile images - you'll need to add these images to your assets folder
import profile1 from '../assets/kanojia.jpg'; // student co-ordinator
import profile2 from '../assets/profile2.jpg'; // president
import profile3 from '../assets/profile3.jpg'; // vp-1
import profile4 from '../assets/StudentCouncil_images/ManasMani.jpg'; // vp-2

// Contact cards data with profile images
const contactMembers = [
  {
    id: 1,
    name: 'Dr. Kanojia Sindhuben Babulal',
    role: 'Student Co-ordinator, CSI-CUJ',
    email: 'dr.kanojiasindhu@cuj.ac.in',
    phone: '+91  9415800952',
    
    image: profile1,
  },
  {
    id: 2,
    name: 'Aditya Ashish',
    role: 'President, CSI CUJ',
    email: 'rahul.singh@csicuj.org',
    phone: '+91 90123 45678',
    image: profile2,
  },
  {
    id: 3,
    name: 'Ayesha Gupta',
    role: 'Vice President, CSI CUJ',
    email: 'anjali.gupta@csicuj.org',
    phone: '+91 0000000000',
    image: profile3,
  },
  {
    id: 4,
    name: 'Manas Mani',
    role: 'Vice President, CSI CUJ',
    email: 'manas.22190503029@cuj.ac.in',
    phone: '+91 0000000000',
    image: profile4,
  },
];

const ContactUsPage = () => {
  // Replace with your actual Google Maps embed URL
  const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5304.990112847291!2d85.25063117652269!3d23.43931170064601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4dd97ba3aaaab%3A0xd680750f0fd2ab4d!2sCentral%20University%20of%20Jharkhand!5e1!3m2!1sen!2sin!4v1753905282741!5m2!1sen!2sin" 
  // Replace with your actual Google Form embed URL
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeRqeuwyi4mKqTXhwOyGc8hHo6MxxK1_FP0oWM6v8f7gkn8mg/viewform?usp=dialog";

  return (
    <div className="relative min-h-screen bg-gray-50 text-csi-blue overflow-hidden">
      <Header />
      <Navbar />

      {/* Main content area */}
      <main className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 relative z-10">
        <div className="container mx-auto px-4 py-8">

          {/* Title and Welcoming Message */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-csi-blue mb-4 leading-tight">
              Get In Touch With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions, suggestions, or just want to connect, feel free to reach out to our dedicated team.
            </p>
          </section>

          {/* Contact Cards Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-csi-blue mb-10">Our Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
                >
                  {/* Profile Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-csi-blue shadow-lg">
                    <img
                      src={member.image}
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/96x96/007bff/ffffff?text=' + member.name.charAt(0);
                      }}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-csi-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-csi-blue font-medium mb-4 group-hover:text-csi-dark-blue transition-colors duration-300">
                    {member.role}
                  </p>
                  <div className="w-full space-y-3 mt-auto">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center text-gray-600 hover:text-csi-blue transition-colors duration-300 text-lg"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center text-gray-600 hover:text-csi-blue transition-colors duration-300 text-lg"
                      aria-label={`Call ${member.name}`}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                      {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Google Map Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-csi-blue mb-10">Find Us Here</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src={googleMapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Central University of Jharkhand"
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          {/* Google Form Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-csi-blue mb-10">Have a Question or Suggestion?</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-hidden">
              <iframe
                src={googleFormEmbedUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="CSI CUJ Contact Form"
                className="rounded-md"
              >Loading…</iframe>
            </div>
          </section>

        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ContactUsPage;