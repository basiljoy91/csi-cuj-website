// src/components/events/InaugurationSection.jsx
import React, { useState } from 'react';
import EventModal from '../EventModal';
import squareImg1_1 from '../../assets/square_img1_1.jpg';
import squareImg1_2 from '../../assets/square_img1_2.jpg';
import squareImg2_1 from '../../assets/square_img2_1.jpg';

const inaugurationImages = [squareImg1_1, squareImg1_2, squareImg2_1];

const InaugurationSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Inauguration</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer" onClick={() => setModalOpen(true)}>
        {inaugurationImages.map((img, idx) => (
          <img key={idx} src={img} alt={`Inauguration ${idx + 1}`} className="rounded-lg object-cover" />
        ))}
      </div>

      {modalOpen && (
        <EventModal
          title="Inauguration"
          onClose={() => setModalOpen(false)}
          content={
            <>
              <p className="mb-4">
                The inaugural ceremony kicked off with great enthusiasm and participation from all departments...
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inaugurationImages.map((img, idx) => (
                  <img key={idx} src={img} alt={`Inauguration ${idx + 1}`} className="rounded-lg" />
                ))}
              </div>
            </>
          }
        />
      )}
    </section>
  );
};

export default InaugurationSection;
