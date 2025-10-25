import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const PackageCard = ({ tourPack }) => {
  const { _id, tour_name, duration, departure_date, image } = tourPack;

  return (
    <motion.div
      whileHover={{ scale: 1.00, y: -5 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className="relative rounded-md overflow-hidden shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-[260px] overflow-hidden">
        <motion.img
          src={image}
          alt={tour_name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

        {/* Title Over Image */}
        <div className="absolute bottom-4 left-5 text-left">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            {tour_name}
          </h2>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 text-start">
        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-500">
            Duration: <span className="font-semibold text-sky-700">{duration}</span>
          </p>
          <p className="text-sm text-gray-500">
            Departure: <span className="font-semibold text-sky-700">{departure_date}</span>
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Link to={`/all-packages/${_id}`}>
            <motion.button
              whileHover={{
                background: 'linear-gradient(to right, #0284c7, #14b8a6)',
                color: '#fff',
                x: 3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-2 text-sky-700 border border-sky-500 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition-all duration-300"
            >
              View Details
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <FaLocationArrow />
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </div>

    
      <motion.div
        className="absolute inset-0 rounded-3xl border border-transparent pointer-events-none"
        whileHover={{
          boxShadow: '0 0 25px rgba(14,165,233,0.35)',
        }}
      />
    </motion.div>
  );
};

export default PackageCard;
