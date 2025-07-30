// src/pages/Gallery.jsx
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const galleryData = [
  {
    id: 1,
    title: "CSI Inauguration",
    images: [
      { src: "https://drive.google.com/uc?export=view&id=1-ABC123DEF456GHI789JKL", alt: "Inauguration Ceremony - Chief Guest Address" },
      { src: "https://drive.google.com/uc?export=view&id=1-DEF456GHI789JKL012MNO", alt: "Inauguration Ceremony - Certificate Distribution" },
      { src: "https://drive.google.com/uc?export=view&id=1-GHI789JKL012MNO345PQR", alt: "Inauguration Ceremony - Group Photo" },
      { src: "https://drive.google.com/uc?export=view&id=1-JKL012MNO345PQR678STU", alt: "Inauguration Ceremony - Student Interaction" },
      { src: "https://drive.google.com/uc?export=view&id=1-MNO345PQR678STU901VWX", alt: "Inauguration Ceremony - Closing Remarks" },
      { src: "https://drive.google.com/uc?export=view&id=1-ABC123DEF456GHI789JKL", alt: "Inauguration Ceremony - Chief Guest Address" },
      { src: "https://drive.google.com/uc?export=view&id=1-DEF456GHI789JKL012MNO", alt: "Inauguration Ceremony - Certificate Distribution" },
      { src: "https://drive.google.com/uc?export=view&id=1-GHI789JKL012MNO345PQR", alt: "Inauguration Ceremony - Group Photo" },
      { src: "https://drive.google.com/uc?export=view&id=1-JKL012MNO345PQR678STU", alt: "Inauguration Ceremony - Student Interaction" },
      { src: "https://drive.google.com/uc?export=view&id=1-MNO345PQR678STU901VWX", alt: "Inauguration Ceremony - Closing Remarks" },
    ]
  },
  {
    id: 2,
    title: "National Seminar Day 1",
    images: [
      { src: "https://drive.google.com/uc?export=view&id=1-PQR678STU901VWX234YZA", alt: "Day 1 - Opening Session" },
      { src: "https://drive.google.com/uc?export=view&id=1-STU901VWX234YZA567BCD", alt: "Day 1 - Keynote Speaker" },
      { src: "https://drive.google.com/uc?export=view&id=1-VWX234YZA567BCD890EFG", alt: "Day 1 - Technical Session" },
      { src: "https://drive.google.com/uc?export=view&id=1-YZA567BCD890EFG123HIJ", alt: "Day 1 - Panel Discussion" },
      { src: "https://drive.google.com/uc?export=view&id=1-BCD890EFG123HIJ456KLM", alt: "Day 1 - Networking Break" },
    ]
  },
  {
    id: 3,
    title: "National Seminar Day 2",
    images: [
      { src: "https://drive.google.com/uc?export=view&id=1-EFG123HIJ456KLM789NOP", alt: "Day 2 - Workshop Session" },
      { src: "https://drive.google.com/uc?export=view&id=1-HIJ456KLM789NOP012QRS", alt: "Day 2 - Hands-on Training" },
      { src: "https://drive.google.com/uc?export=view&id=1-KLM789NOP012QRS345TUV", alt: "Day 2 - Student Presentations" },
      { src: "https://drive.google.com/uc?export=view&id=1-NOP012QRS345TUV678WXY", alt: "Day 2 - Award Ceremony" },
      { src: "https://drive.google.com/uc?export=view&id=1-QRS345TUV678WXY901ZAB", alt: "Day 2 - Closing Ceremony" },
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
