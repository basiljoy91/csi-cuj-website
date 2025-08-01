import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { FaLinkedin } from 'react-icons/fa';
import kanojiaImg from '../assets/kanojia.jpg';
import universityBg from '../assets/university_bg.jpg';

// importing the images of the student council

// import AdityaAshish from "../assets/StudentCouncil_images/AdityaAshish.jpg";
// import AyeshaGupta from "../assets/StudentCouncil_images/AyeshaGupta.jpg";
import ManasMani from "../assets/StudentCouncil_images/ManasMani.jpg";
// import SachinYadav from "../assets/StudentCouncil_images/SachinYadav.jpg";
import ManshiKumari from "../assets/StudentCouncil_images/ManshiKumari.jpg";
import OmVishesh from "../assets/StudentCouncil_images/OmVishesh.jpg";
 import RituKumari from "../assets/StudentCouncil_images/RituKumari.jpg";
// import AkashKumar form "../assets/StudentCouncil_images/AkashKumar"
import VisheshSingh from "../assets/StudentCouncil_images/VisheshSingh.jpg";
import MansiVats from "../assets/StudentCouncil_images/MansiVats.jpg";
import AdityaKumar from "../assets/StudentCouncil_images/AdityaKumar.jpg";
// import ApurbaDas from "../assets/StudentCouncil_images/ApurbaDas.jpg";
import UjitRaj from "../assets/StudentCouncil_images/UjitRaj.jpg";
import BasilJoy from "../assets/StudentCouncil_images/BasilJoy.jpg";
import HemantPrakash from "../assets/StudentCouncil_images/HemantPrakash.jpg"; 
// import RishavMishra form "../assets/StudentCouncil_images/RishavMishra.jpg";


const councilData = {
  coordinator: {
    name: "Dr. Kanojia Sindhuben Babulal",
    position: "Asst. Prof. & Student Co-ordinator, CSI-CUJ",
    image: kanojiaImg,
    email: "dr.kanojiasindhu@cuj.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-kanojia-sindhu-4a750818/"
  },
  members: [
    { name: "ADITYA ASHISH", position: "President", image: "/images/default.jpg", email: "aditya@example.com", linkedin: "#" },
    { name: "AYESHA GUPTA", position: "Vice President", image: "/images/default.jpg", email: "ayesha@example.com", linkedin: "#" },
    { name: "MANAS MANI", position: "Vice President", image: ManasMani, email: "manas.22190503029@cuj.ac.in", linkedin: "https://www.linkedin.com/in/manas-mani-9a259b1a9/" },
    { name: "SACHIN KUMAR YADAV", position: "Secretary", image: "/images/default.jpg", email: "sachin@example.com", linkedin: "https://www.linkedin.com/in/sachin-kumar-yadav-196505291/" },
    { name: "MANSHI KUMARI", position: "Program Director", image: ManshiKumari, email: "mansi.22190503031@cuj.ac.in", linkedin: "https://www.linkedin.com/in/mansi-kumari-984537312" },
    { name: "OM VISHESH", position: "Program Director", image: OmVishesh, email: "omvishesh123@gmail.com", linkedin: "https://www.linkedin.com/in/omvishesh/" },
    { name: "ANSHUMAN SAMANTA", position: "Treasurer", image: "/images/default.jpg", email: "anshuman@example.com", linkedin: "https://www.linkedin.com/in/anshuman-samanta-4199361aa/" },
    { name: "RITU KUMARI", position: "Treasurer", image: RituKumari, email: "ritukumari2409@gmail.com", linkedin: "https://www.linkedin.com/in/ritu-kumari7585/" },
    { name: "AKASH KUMAR", position: "Technical Secretary", image: "/images/default.jpg", email: "akash@example.com", linkedin: "#" },
    { name: "VISHESH SINGH", position: "Technical Secretary", image: VisheshSingh, email: "vishusingh57682@gmail.com", linkedin: "https://www.linkedin.com/in/vishesh-singh-3bb371249/" },
    { name: "MANSHI VATSA", position: "Technical Secretary", image: MansiVats, email: "manshivatsa7676@gmail.com", linkedin: "https://www.linkedin.com/in/manshi-vatsa-b1771b2b6/" },
    { name: "ADITYA KUMAR", position: "Technical Secretary", image: AdityaKumar, email: "adityaku98522@gmail.com", linkedin: "https://www.linkedin.com/in/aditya-kumar-376097282" },
    { name: "APURBA DAS", position: "Co-Technical Secretary", image: "/images/apurba.jpg", email: "apurba131223@gmail.com", linkedin: "https://www.linkedin.com/in/apurbasbjk30/" },
    { name: "UJIT RAJ RATHORE", position: "Co-Technical Secretary", image: UjitRaj, email: "ujit.23190503060@cuj.ac.in", linkedin: " https://www.linkedin.com/in/ujit-raj-rathore-ab88a1241/" },
    { name: "BASIL JOY", position: "Co-Technical Secretary", image: BasilJoy, email: "basiljoygreen@gmail.com", linkedin: "http://linkedin.com/in/basil-joy-6b07511a7" },
    { name: "HEMANT PRAKASH", position: "Co-Technical Secretary", image: HemantPrakash, email: "hemant.23190503030@cuj.ac.in", linkedin: "https://www.linkedin.com/in/hemant-prakash-74381929b/" },
    { name: "RISHAV MISHRA", position: "Co-Technical Secretary", image: "/images/default.jpg", email: "rishavmishra0408@gmail.com", linkedin: "https://www.linkedin.com/in/rishav-mishra-516882276/" }
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

      {/* Faded University Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 -z-10" style={{ backgroundImage: `url(${universityBg})` }}></div>

      <div className="pt-28 px-6 min-h-screen relative z-10">
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
