// src/pages/Gallery.jsx
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// Import images from assets
import a from '../assets/Gallery/National_Seminar/day 1/1.jpg';
import b from '../assets/Gallery/National_Seminar/day 1/2.jpg';
import c from '../assets/Gallery/National_Seminar/day 1/3.jpg';
import d from '../assets/Gallery/National_Seminar/day 1/4.jpg';
import e from '../assets/Gallery/National_Seminar/day 1/5.jpg';
import f from '../assets/Gallery/National_Seminar/day 1/6.jpg';
import g from '../assets/Gallery/National_Seminar/day 1/7.jpg';
import h from '../assets/Gallery/National_Seminar/day 1/8.jpg';
import i from '../assets/Gallery/National_Seminar/day 1/9.jpg';
import j from '../assets/Gallery/National_Seminar/day 1/10.jpg';
import k from '../assets/Gallery/National_Seminar/day 1/11.jpg';

//day 2
import day2a from '../assets/Gallery/National_Seminar/day 2/a.jpg';
import day2b from '../assets/Gallery/National_Seminar/day 2/b.jpg';
import day2c from '../assets/Gallery/National_Seminar/day 2/c.jpg';
import day2d from '../assets/Gallery/National_Seminar/day 2/d.jpg';
import day2e from '../assets/Gallery/National_Seminar/day 2/e.jpg';
import day2f from '../assets/Gallery/National_Seminar/day 2/f.jpg';
import day2g from '../assets/Gallery/National_Seminar/day 2/g.jpg';
import day2h from '../assets/Gallery/National_Seminar/day 2/h.jpg';
import day2i from '../assets/Gallery/National_Seminar/day 2/i.jpg';
import day2j from '../assets/Gallery/National_Seminar/day 2/j.jpg';
import day2k from '../assets/Gallery/National_Seminar/day 2/k.jpg';
import day2l from '../assets/Gallery/National_Seminar/day 2/l.jpg';

// Inagration
import inag1 from '../assets/Gallery/Inagruation/inag1.jpg';
import inag3 from '../assets/Gallery/Inagruation/inag3.jpg';
import inag2 from '../assets/Gallery/Inagruation/inag2.jpg';


const galleryData = [
  {
    id: 1,
    title: "CSI Inauguration",
    images: [
      { src: inag1, alt: "Inauguration Ceremony - Chief Guest Address" },
      { src: inag3, alt: "Inauguration Ceremony" },
      { src: inag2, alt: "Inauguration Ceremony - Group Photo" },
      { src: inag1, alt: "Inauguration Ceremony - Chief Guest Address" },
      { src: inag3, alt: "Inauguration Ceremony" },
      { src: inag2, alt: "Inauguration Ceremony - Group Photo" },
    ]
  },
  {
    id: 2,
    title: "National Seminar Day 1",
    images: [
      { src: a, alt: "Day 1 - Opening Session" },
      { src: b, alt: "Day 1 - Keynote Speaker" },
      { src: c, alt: "Day 1 - Technical Session" },
      { src: d, alt: "Day 1 - Panel Discussion" },
      { src: e, alt: "Day 1 - Networking Break" },
      { src: f, alt: "Day 1 - Student Presentations" },
      { src: g, alt: "Day 1 - Workshop Session" },
      { src: h, alt: "Day 1 - Interactive Session" },
      { src: i, alt: "Day 1 - Interactive Session" },
      { src: j, alt: "Day 1 - Interactive Session" },
      { src: k, alt: "Day 1 - Interactive Session" },
    ]
  },
  {
    id: 3,
    title: "National Seminar Day 2",
    images: [
      { src: day2a, alt: "Day 2 - Workshop Session" },
      { src: day2b, alt: "Day 2 - Hands-on Training" },
      { src: day2c, alt: "Day 2 - Student Presentations" },
      { src: day2d, alt: "Day 2 - Award Ceremony" },
      { src: day2e, alt: "Day 2 - Closing Ceremony" },
      { src: day2f, alt: "Day 2 - Workshop Session" },
      { src: day2g, alt: "Day 2 - Hands-on Training" },
      { src: day2h, alt: "Day 2 - Student Presentations" },
      { src: day2i, alt: "Day 2 - Award Ceremony" },
      { src: day2j, alt: "Day 2 - Closing Ceremony" },
      { src: day2k, alt: "Day 2 - Workshop Session" },
      { src: day2l, alt: "Day 2 - Hands-on Training" },
    ]
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollRefs = useRef({});
  const [scrollStates, setScrollStates] = useState({});

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const updateScrollButtons = (id) => {
    const container = scrollRefs.current[id];
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setScrollStates(prev => ({
      ...prev,
      [id]: {
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft + clientWidth < scrollWidth - 1
      }
    }));
  };

  const handleScroll = (id, direction) => {
    const container = scrollRefs.current[id];
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(() => updateScrollButtons(id), 300);
    }
  };

  useEffect(() => {
    galleryData.forEach(category => {
      updateScrollButtons(category.id);
    });
  }, [selectedCategory]);

  const filteredData = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(category => category.id === parseInt(selectedCategory));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />

      <main className="pt-32 sm:pt-40 md:pt-48 lg:pt-56">
        <div className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-csi-blue mb-4">Our Gallery</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Explore the moments that define our journey at CSI CUJ.
            </p>
          </section>

          <section className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === 'all'
                    ? 'bg-csi-blue text-white'
                    : 'bg-white text-csi-blue border border-csi-blue'
                }`}
              >
                All Events
              </button>
              {galleryData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id.toString())}
                  className={`px-6 py-2 rounded-full ${
                    selectedCategory === category.id.toString()
                      ? 'bg-csi-blue text-white'
                      : 'bg-white text-csi-blue border border-csi-blue'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </section>

          <section>
            {filteredData.map((category) => (
              <div key={category.id} className="mb-16">
                <h2 className="text-3xl font-bold text-csi-blue mb-6 text-center">
                  {category.title}
                </h2>

                <div className="relative">
                  {scrollStates[category.id]?.canScrollLeft && (
                    <button
                      onClick={() => handleScroll(category.id, 'left')}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-csi-blue text-white rounded-full shadow-md hover:bg-blue-800"
                    >
                      &#10094;
                    </button>
                  )}

                  <div
                    ref={(el) => (scrollRefs.current[category.id] = el)}
                    onScroll={() => updateScrollButtons(category.id)}
                    className="flex overflow-x-auto gap-4 px-8 scroll-smooth"
                  >
                    {category.images.map((image, index) => (
                      <div
                        key={index}
                        className="min-w-[250px] flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-48 w-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200/007bff/ffffff?text=Image+Not+Found';
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {scrollStates[category.id]?.canScrollRight && (
                    <button
                      onClick={() => handleScroll(category.id, 'right')}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-csi-blue text-white rounded-full shadow-md hover:bg-blue-800"
                    >
                      &#10095;
                    </button>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
