import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FaLinkedin } from 'react-icons/fa';
import kanojiaImg from '../assets/kanoriya.jpg';
import Manasmani from "../assets/ManasMani.jpg";
import MansiVats from "../assets/MansiVats.jpg";
import AdityaKumar from "../assets/AdityaKumar.jpg";


const councilData = {
  coordinator: {
    name: "Dr. Kanojia Sindhuben Babulal",
    position: "Asst. Prof. & Student Co-ordinator, CSI-CUJ",
    image:kanojiaImg,
    email: "...",
    linkedin: "https://linkedin.com/in/namarta"
  },
  members: [
    { name: "ADITYA ASHISH", position: "President", image: "/images/default.jpg", email: "aditya@example.com", linkedin: "#" },
    { name: "AYESHA GUPTA", position: "Vice President", image: "/images/default.jpg", email: "ayesha@example.com", linkedin: "#" },
    { name: "MANAS MANI", position: "Vice President", image: Manasmani, email: "manas.22190503029@cuj.ac.in", linkedin: "https://www.linkedin.com/in/manas-mani-9a259b1a9" },
    { name: "SACHIN KUMAR YADAV", position: "Secretary", image: "/images/default.jpg", email: "sachin@example.com", linkedin: "#" },
    { name: "MANSHI KUMARI", position: "Program Director", image: "/images/default.jpg", email: "manshi@example.com", linkedin: "#" },
    { name: "OM VISHESH", position: "Program Director", image: "/images/default.jpg", email: "om@example.com", linkedin: "#" },
    { name: "ANSHUMAN SAMANTA", position: "Treasurer", image: "/images/default.jpg", email: "anshuman@example.com", linkedin: "#" },
    { name: "RITU KUMARI", position: "Treasurer", image: "/images/default.jpg", email: "ritu@example.com", linkedin: "#" },
    { name: "AKASH KUMAR", position: "Technical Secretary", image: "/images/default.jpg", email: "akash@example.com", linkedin: "#" },
    { name: "VISHESH SINGH", position: "Technical Secretary", image: "/images/default.jpg", email: "vishesh@example.com", linkedin: "#" },
    { name: "MANSHI VATSA", position: "Technical Secretary", image: MansiVats, email: "manshivatsa7676@gmail.com", linkedin: "https://www.linkedin.com/public-profile/settings" },
    { name: "ADITYA KUMAR", position: "Technical Secretary", image: AdityaKumar, email: "adityaku98522@gmail.com", linkedin: "https://www.linkedin.com/in/aditya-kumar-376097282" },
    { name: "APURBA DAS", position: "Co-Technical Secretary", image: "/images/apurba.jpg", email: "apurba131223@gmail.com", linkedin: "https://www.linkedin.com/in/apurbasbjk30/" },
    { name: "UJIT RAJ RATHORE", position: "Co-Technical Secretary", image: "/images/default.jpg", email: "ujit@example.com", linkedin: "#" },
    { name: "BASIL JOY", position: "Co-Technical Secretary", image: "/images/default.jpg", email: "basiljoygreen@gmail.com", linkedin: "http://linkedin.com/in/basil-joy-6b07511a7" },
    { name: "HEMANT PRAKASH", position: "Co-Technical Secretary", image: "/images/default.jpg", email: "hemant@example.com", linkedin: "#" },
    { name: "RISHAV MISHRA", position: "Co-Technical Secretary", image: "/images/default.jpg", email: "hemant@example.com", linkedin: "#" }
  ],
};

const ProfileCard = ({ name, position, image, email, linkedin }) => (
  <div className="bg-white rounded-xl shadow-md p-3 text-center hover:shadow-lg transition-all duration-300">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-4 border-csi-blue"
    />
    <h3 className="text-lg font-semibold text-csi-blue">{name}</h3>
    <p className="text-sm text-gray-600">{position}</p>
    <p className="text-sm text-gray-500">{email}</p>
    {linkedin && (
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-csi-blue hover:text-blue-800">
        <FaLinkedin size={20} />
      </a>
    )}
  </div>
);

const StudentCouncil = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div className="pt-28 px-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-csi-blue mb-10">
          CSI STUDENT COUNCIL 2024–25
        </h1>

        {/* Student Coordinator */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-csi-blue mb-4 text-center">
            Student Coordinator
          </h2>
          <div className="max-w-sm mx-auto">
            <ProfileCard {...councilData.coordinator} />
          </div>
        </div>

        {/* Council Members */}
        <div>
          <h2 className="text-2xl font-semibold text-csi-blue mb-6 text-center">
            Student Council Members
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {councilData.members.map((member, index) => (
              <ProfileCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentCouncil;
