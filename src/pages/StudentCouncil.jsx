import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const councilData = {
  coordinator: {
    name: "Lorem Ipsum",
    position: "Student Coordinator",
    image: "/images/apurba.jpg",
    branch: "Lorem Branch",
    year: "2024",
    email: "lorem@ipsum.com",
  },
  members: [
    {
      name: "Namarta Dey",
      position: "Technical Head",
      image: "/images/namarta.jpg",
      branch: "Lorem Branch",
      email: "namarta@example.com",
    },
    {
      name: "Rahul Sharma",
      position: "Design Lead",
      image: "/images/rahul.jpg",
      branch: "Lorem Branch",
      email: "rahul@example.com",
    },
    {
      name: "John Doe",
      position: "Logistics Head",
      image: "/images/default.jpg",
      branch: "Lorem Branch",
      email: "john@example.com",
    },
    {
      name: "Jane Smith",
      position: "Marketing Lead",
      image: "/images/default.jpg",
      branch: "Lorem Branch",
      email: "jane@example.com",
    },
    // Add more dummy members as needed
  ],
};

const ProfileCard = ({ name, position, image, branch, email }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 text-center transition-transform hover:scale-105 duration-300">
    <img
      src={image}
      alt={name}
      className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-csi-blue"
    />
    <h2 className="text-xl font-semibold text-csi-blue">{name}</h2>
    <p className="text-sm text-gray-600">{position}</p>
    <p className="text-sm">{branch}</p>
    <p className="text-sm text-gray-500">{email}</p>
  </div>
);

const StudentCouncil = () => {
  const { year } = useParams();

  return (
    <>
      <Header />
      <Navbar />

      <div className="pt-32 px-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-csi-blue mb-10">
          Student Council {year}
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
      <Footer /> {/* ✅ Add Footer here */}
    </>
    
  );
};

export default StudentCouncil;
