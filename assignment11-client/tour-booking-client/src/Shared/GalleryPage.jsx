// GalleryPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { destinations } from "./PopularDestination";
;

const GalleryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // If specific destination ID is provided, show only that destination
  const displayDestinations = id
    ? destinations.filter(dest => dest.id === parseInt(id))
    : destinations;

  const handleBackClick = () => {
    navigate(-1);
  };

  const openModal = (destination) => {
    setSelectedImage(destination);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaArrowLeft />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            {id ? destinations.find(d => d.id === parseInt(id))?.title : "Beautiful Bangladesh"}
          </h1>
          <div className="w-20"></div> {/* Spacer for balance */}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(destination)}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative h-80"
            >
              <img
                src={destination.img}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                  <div className="flex items-center gap-2 text-blue-200">
                    <FaMapMarkerAlt className="text-sm" />
                    <p>{destination.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal - Improved Version */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto py-8"
            onClick={closeModal}
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div
                className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Always visible */}
                <button
                  onClick={closeModal}
                  className="absolute -top-4 -right-4 text-white bg-red-500 hover:bg-red-600 text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 transition-colors"
                >
                  ✕
                </button>

                {/* Image */}
                <div className="max-h-[80vh] overflow-hidden">
                  <img
                    src={selectedImage.img}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  />
                </div>

                {/* Caption */}
                <div className="bg-gray-800 p-6 rounded-b-xl">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300 text-lg">{selectedImage.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;