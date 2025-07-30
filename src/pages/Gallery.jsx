// src/pages/Gallery.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// Gallery data with Google Drive image URLs
const galleryData = [
  {
    id: 1,
    title: "CSI Inauguration",
    images: [
      { 
        src: "https://drive.google.com/uc?export=view&id=1-ABC123DEF456GHI789JKL", 
        alt: "Inauguration Ceremony - Chief Guest Address" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-DEF456GHI789JKL012MNO", 
        alt: "Inauguration Ceremony - Certificate Distribution" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-GHI789JKL012MNO345PQR", 
        alt: "Inauguration Ceremony - Group Photo" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-JKL012MNO345PQR678STU", 
        alt: "Inauguration Ceremony - Student Interaction" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-MNO345PQR678STU901VWX", 
        alt: "Inauguration Ceremony - Closing Remarks" 
      },
    ]
  },
  {
    id: 2,
    title: "National Seminar Day 1",
    images: [
      { 
        src: "https://drive.google.com/uc?export=view&id=1-PQR678STU901VWX234YZA", 
        alt: "Day 1 - Opening Session" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-STU901VWX234YZA567BCD", 
        alt: "Day 1 - Keynote Speaker" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-VWX234YZA567BCD890EFG", 
        alt: "Day 1 - Technical Session" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-YZA567BCD890EFG123HIJ", 
        alt: "Day 1 - Panel Discussion" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-BCD890EFG123HIJ456KLM", 
        alt: "Day 1 - Networking Break" 
      },
    ]
  },
  {
    id: 3,
    title: "National Seminar Day 2",
    images: [
      { 
        src: "https://drive.google.com/uc?export=view&id=1-EFG123HIJ456KLM789NOP", 
        alt: "Day 2 - Workshop Session" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-HIJ456KLM789NOP012QRS", 
        alt: "Day 2 - Hands-on Training" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-KLM789NOP012QRS345TUV", 
        alt: "Day 2 - Student Presentations" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-NOP012QRS345TUV678WXY", 
        alt: "Day 2 - Award Ceremony" 
      },
      { 
        src: "https://drive.google.com/uc?export=view&id=1-QRS345TUV678WXY901ZAB", 
        alt: "Day 2 - Closing Ceremony" 
      },
    ]
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const filteredData = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(category => category.id === parseInt(selectedCategory));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />

      {/* Main content */}
      <main className="pt-32 sm:pt-40 md:pt-48 lg:pt-56">
        <div className="container mx-auto px-4 py-8">
          
          {/* Page Title */}
          <section className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-csi-blue mb-4">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Explore the moments that define our journey at CSI CUJ. From inaugurations to seminars, 
              every event is captured to showcase our vibrant community.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-csi-blue text-white shadow-lg'
                    : 'bg-white text-csi-blue border-2 border-csi-blue hover:bg-csi-blue hover:text-white'
                }`}
              >
                All Events
              </button>
              {galleryData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id.toString())}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id.toString()
                      ? 'bg-csi-blue text-white shadow-lg'
                      : 'bg-white text-csi-blue border-2 border-csi-blue hover:bg-csi-blue hover:text-white'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="mb-16">
            {filteredData.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="text-3xl font-bold text-csi-blue mb-6 text-center">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {category.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x200/007bff/ffffff?text=Image+Not+Found';
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
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
