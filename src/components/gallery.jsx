import React from "react";

const Gallery = () => {
  const galleryImages = [
    "/Breakfastclub-cup-latte.jpg",
    "/Two-customers-breakfast.jpg",
    "/Barista-pouring-milk.jpg",
    "/Breakfast-bowl-combo.jpg",
    "/Customer-burger.jpg",
    "/Cafe-cup-milk.jpg",
    "/Two-customers-coffee.jpg",
    "/Ahmeraki-cup.jpg",
    "/Launch-photo.jpg",
    "/Lunch-outside.jpg"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-green-800 mb-4">
          Our Curated Atmosphere
        </h2>
        <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the elegant ambiance and thoughtful details that make
          our spaces truly exceptional.
        </p>
      </div>

      {/* Gallery Container - Unified Layout */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-12">
        {/* Featured Image - Takes full width on mobile, 8 columns on desktop */}
        <div className="col-span-2 md:col-span-8 h-48 sm:h-64 md:h-96 group relative overflow-hidden rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
          <img
            src={galleryImages[0]}
            alt="Featured gallery image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Top right images - Stack on mobile, side by side on desktop */}
        <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-rows-2 gap-3 md:gap-6">
          <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={galleryImages[1]}
              alt="Gallery image 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={galleryImages[2]}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={galleryImages[9]}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={galleryImages[8]}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Row - 2 columns on mobile, 4 columns on desktop */}
        {galleryImages.slice(3, 7).map((src, i) => (
          <div
            key={`gallery-${i}`}
            className="col-span-1 md:col-span-3 h-32 sm:h-40 md:h-64 group relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={src}
              alt={`Gallery image ${i + 4}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white rounded-md transition-colors duration-300 font-medium text-sm tracking-wider uppercase">
          View Full Gallery
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;