// src/pages/Members.jsx
import React, { useState } from 'react';
import Header from '../components/Header'; // Reusing your Header component
import Navbar from '../components/Navbar';   // Reusing your Navbar component
import membersData from '../assets/membersData'; // Import your prepared member data

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter members based on search term
  const filteredMembers = membersData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.membershipId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gray-50 text-csi-blue overflow-hidden">
      <Header />
      <Navbar /> {/* Navbar will be sticky on scroll */}

      {/* Main content area, pushed down by the header's height and navbar's initial height */}
      {/* Ensure enough top padding to clear the fixed/sticky header and navbar */}
      <main className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 relative z-10">
        <div className="container mx-auto px-4 py-8">

          {/* Title and Introduction */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold text-csi-blue mb-4 leading-tight">
              Our Esteemed Members
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the vibrant community driving innovation at CSI CUJ. Below is a list of our active members.
            </p>
          </section>

          {/* Search Bar */}
          <section className="mb-10 animate-slide-in-up">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search by Name, ID, or Branch..."
                className="w-full p-4 border-2 border-csi-blue rounded-xl focus:outline-none focus:ring-2 focus:ring-csi-blue focus:border-transparent text-lg shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </section>

          {/* Members Table */}
          <section className="mb-16 animate-fade-in-up">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden md:overflow-auto max-w-full">
              {filteredMembers.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-csi-blue">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                      >
                        Membership ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                      >
                        Student's Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                      >
                        Branch
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMembers.map((member) => (
                      <tr
                        key={member.membershipId}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.membershipId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {member.branch}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-8 text-center text-gray-600 text-lg">
                  No members found matching your search.
                </div>
              )}
            </div>
          </section>

        </div>
      </main>

      {/* Basic Footer (Re-use your Footer component if you have one) */}
      <footer className="bg-csi-blue text-white p-8 text-center mt-12">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} CSI Student Chapter, Central University of Jharkhand. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with <span role="img" aria-label="heart">❤️</span> by CSI Tech Team</p>
        </div>
      </footer>
    </div>
  );
};

export default Members;