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
            Computer Society of India (CSI) Chapter Activities at Central University of Jharkhand 
The Department of Computer Science and Engineering , Central University of Jharkhand , proudly inaugurated its official Computer Society of India (CSI) Student Chapter on 29th Nov 2024. This initiative aims to enhance technical competencies, promote research culture, and provide a platform for students to engage with the broader computing community.


            <br/>Dignitaries from the CSI council graced the occasion: 
            <br/><b>Inagurated by:</b> Prof. A. K. Nayak (Advisor, IIBM Group, Former CSI President)
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
  The inaugural session commenced on <b>27th February 2024</b> at the Science Academic Block Auditorium, CUJ Manatu Campus. The session included the welcome address by Prof. S. C. Yadav (HOD), <b>lighting of the lamp</b>, with the chief guest:
</p>
<ul>
  <li>• Prof. K. B. Das (Hon’ble Vice-Chancellor, CUJ)</li>
  <li>• Prof. P.K. Panda, Vice Chancellor(in-charge), CUJ</li>
  <li>• Prof. Ajai Singh (Dean, SET)</li>
  <li>• Prof. A. K. Nayak (Advisor, IIBM Group, Former CSI President)</li>
  <li>• Prof. Ashutosh Kumar Singh (Director, IIIT Bhopal)</li>
</ul>
<p className="text-lg text-justify">
  <br />
  <b>Inaugurated by : </b>Prof. P.K. Panda, Vice Chancellor(in-charge), CUJ
  <br/><b>Chief Guest:</b> Prof. Ashutosh Kr. Singh, Director, IIIT Bhopal.
  <br/><b>Guest of Honour: </b>Prof. A. K. Nayak, Advisor, IIBM Group & Former President, CSI.<br />
  <br/><b>Two insightful keynote addresses were delivered:</b> <br />
  <b>• Prof. Ashutosh Kumar Singh (IIIT Bhopal)</b><br />
  ➤ Prof. Ashutosh Kumar Singh is a distinguished academic and currently serves as the Founder Director of the <b>Indian Institute of Information Technology (IIIT) Bhopal</b>, a role he began in <b>May 2023</b>. 
  <br /> <b>• Prof. A. K. Nayak (IIBM Group, CSI)</b><br />

  ➤ Prof. (Dr.) A. K. Nayak is a senior academician, administrator, and IT industry leader with more than 38 years of experience in teaching, research, training, and administration within <b>Computer Science, Information Technology, and Management</b>.<br />
  <br /><b>Research Paper Presentations and Recognition: </b>
  <br />To promote academic engagement, the seminar included <b>research paper presentations</b>, where <b>35+ papers</b> were presented in <b>offline and online modes</b> by researchers, scholars, and academicians from universities across India. These papers covered various themes under cybersecurity, artificial intelligence, and machine learning.<br />
  To evaluate and recognize outstanding contributions, the organizing team collaborated with <b>renowned professors from across India</b> as session chairs and reviewers. Selected participants were honored with the <b>“Best Presentation Award Certificate”</b>, while all presenters received <b>Certificates of Participation</b>.<br />            
  <br /><b>Session Chairs & Experts: </b><br />
</p>
<ul>
  <li>&emsp;• <b>Mr. Pandey Vijay Bhusan Prasad </b>– Deputy Director General, Department of Telecommunications, Govt. of India.</li>
  <li>&emsp;• <b>Dr. Dinesh Kumar Prabhakar</b> – Assistant Professor, Dept. of Computer Engineering, NIAMT, Ranchi.</li>
  <li>&emsp;• <b>Prof. Dharmendra Singh Rajput </b>– Professor, VIT Vellore.</li>
  <li>&emsp;• <b>Dr. Pradeep Chouksey </b>– Associate Professor, Central University of Himachal Pradesh.</li>
  <li>&emsp;• <b>Dr. Gotam Singh Lalotra</b> – Govt. Degree College, Kathua (University of Jammu).</li>
  <li>&emsp;• <b>Dr. Abha Sharma</b> – Assistant Professor, VIT Bhopal.</li>
  <li>&emsp;• <b>Dr. Brijesh Bakariya </b>– Assistant Professor, Dept. of CSE, KGTU Hoshiarpur.</li>
  <li>&emsp;• <b>Dr. Dharmendra Dangi </b>– Assistant Professor, Dept. of CSE, IIIT Bhopal.</li>
</ul>
<p className="text-lg text-justify">
  <br />
  The session concluded with a <b>vote of thanks</b> by Dr. Kanojia Sindhuben Babubal and the <b>National Anthem</b>.
</p>
        </div>
      </section>

      {/* Day 2 of Seminar */}
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12">
        <div className="md:w-1/2 w-full">
          <EventImageSlider images={day2Images} />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">Day 2 – National Seminar </h2>
          <p className="text-lg text-justify">
            <b>Technical Session I: Dr. Ashish Joshi</b><br />
            ➤ <b>Assistant Professor, University School of Automation and Robotics, GGSIPU (East Delhi Campus)</b><br />
            Dr. Ashish Joshi is known for his work in <b>cybersecurity, wireless networks, and machine learning</b>. He works at GGSIPU on automation and next-generation security technologies, directing scholastic programs and working on research in data science applications to cybersecurity. <br />
            
            <br/><b>Technical Session II: Prof. Siba K. UdgataProfessor</b><br />
            ➤ <b>School of Computer and Information Sciences, University of Hyderabad</b><br />
             Prof. Siba Kumar Udgata is a scholarly focus on <b>sensor networks, IoT, wireless communications, and intelligent algorithms</b>. His session explored the intersection of <b>artificial intelligence and security</b>—especially the academic and practical challenges posed by emerging AI-driven systems. <br />
            <br/><b>Technical Session III: Dr. Bhaskar Mondal</b><br />
            ➤ <b>Assistant Professor, Department of CSE, NIT Patna</b><br />
             Bhaskar Mondal brings a decade of academic and research experience, focusing on <b>machine learning, data analytics, lightweight encryption, and advanced security mechanisms</b>. <br />
            <br/><b>Technical Session IV: Mr. Gautam Hazari</b><br />
            ➤ <b>SEKURA Intelligence, UK Chief Technology Officer</b><br />
            His keynote offered an industry view on <b>cybersecurity intelligence</b> and future passwordless authentication, digital identity, and fraud prevention. Having overseen international initiatives (such as the GSMA Mobile Connect), Mr. Hazari asserts that <b>digital identity must be an inalienable human right</b>, pushing for human-centered, secure, and accessible digital platforms.<br />
            
            <br /><b>Seminar Wrap-Up and Certificate Ceremony:</b><br />
            The Valedictory Session commenced in the afternoon with the arrival of esteemed guests. The session began with a warm Welcome Address by Prof. S. C. Yadav, <b>Head and Convener</b>, followed by an engaging speech from Prof. Ajai Singh, <b>Dean of the School of Engineering and Technology</b>. Dr. Kanojia Sindhuben Babulal, <b>Organizing Secretary</b>, then presented the Seminar Report, summarizing the event’s key highlights, participation details, and major outcomes over the two days. Prof. Arun Kumar Padhy, <b>Dean Research & Development</b>, Central University of Jharkhand, addressed the audience, underscoring the vital importance of sustained research efforts in the field of cybersecurity. The Chief Guest, <b>Prof. Siba K. Udgata</b>, shared his reflections on the seminar, commending the scholarly contributions of both participants and organizers.<br />
               <br /> This was followed by <b>the presentation of Best Presentation Award Certificates</b> to the following recipients:<br />

                ➤<b>Om Vishesh</b> – “A Transfer Learning-Based Framework for Diabetic Retinopathy Diagnosis Using VGG-19 and Stratified Data Augmentation”<br />

                ➤<b>Neha Kumari</b> – “Cyber Security Concerns in E-Learning Education”.<br />

                ➤<b>Shreya Kumari</b> – “The rise of quantum computing/ Trapped Ion Quantum Computing : A Framework for Addressing Security Vulnerabilities”.<br />

                <br />The session concluded with a <b>Vote of Thanks</b> by Dr. Pushpendra Kumar, Organizing Secretary, and the <b>National Anthem</b>, marking the successful conclusion of the seminar.


          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Events;