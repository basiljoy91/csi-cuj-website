import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const imageSections = [
  {
    title: "Orientation Day 2023",
    images: [
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_1",
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_2",
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_3",
      // Add more image URLs
    ],
  },
  {
    title: "Hackathon Event",
    images: [
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_4",
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_5",
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_6",
    ],
  },
  {
    title: "Workshop on AI",
    images: [
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_7",
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_8",
      "https://drive.google.com/uc?export=view&id=IMAGE_ID_9",
    ],
  },
];

const ScrollableGallerySection = ({ title, images }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">📌 {title}</h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="h-48 w-72 object-cover rounded-xl flex-shrink-0"
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        CSI CUJ Photo Gallery
      </h1>

      {/* Optional Filter Buttons & Search */}
      <div className="flex justify-between items-center flex-wrap mb-8">
        <div className="flex gap-4 mb-2">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            All
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Events
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Workshops
          </button>
        </div>
        <input
          type="text"
          placeholder="Search images..."
          className="p-2 rounded bg-gray-800 text-white border border-gray-600"
        />
      </div>

      {imageSections.map((section, index) => (
        <ScrollableGallerySection
          key={index}
          title={section.title}
          images={section.images}
        />
      ))}

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CSI CUJ. All rights reserved.
      </footer>
    </div>
  );
};

export default GalleryPage;
