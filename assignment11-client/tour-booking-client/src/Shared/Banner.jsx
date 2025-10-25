import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import videoBg from "../assets/bannerVideo/bannerVideo.mp4";

const Banner = () => {
  const taglines = [
    "Your Trusted Travel Companion",
    "Discover the World with Ease",
    "Adventure Awaits — Let's Go!",
    "Explore. Experience. Enjoy.",
    "Journeys Tailored Just for You"
  ];

  const [currentTagline, setCurrentTagline] = useState(0);

  // Change tagline every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="hero min-h-[750px] w-full relative overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover absolute top-0 left-0"
        src={videoBg}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/40 backdrop-blur-md px-8 py-8 md:px-14 md:py-10 rounded-2xl shadow-xl max-w-3xl"
        >
          <h1 className="mb-5 text-4xl md:text-5xl text-gray-800 font-semibold">
            <motion.span
              className="dancing-script italic font-bold text-5xl"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Explore
            </motion.span>
            <br />
            <motion.span
              className="font-extrabold text-6xl md:text-7xl text-shadow-2xs text-shadow-black"
              animate={{
                color: [
                  "#fc036f",
                  "#815196",
                  "#f0b30e",
                  "#5cd19c",
                  "#4df0c2",
                  "#4d99f0",
                  "#0a65cc",
                  "#246bbd",
                  "#7b24bd",
                  "#dd71e3",
                  "#e3718f",
                ],
              }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              Zahaba Tours
            </motion.span>

            {/* Rotating tagline */}
            <div className="h-10 mt-2 overflow-hidden text-gray-800">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl font-medium italic"
                >
                  {taglines[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </div>
          </h1>

          <p className="mb-8 text-gray-700 leading-relaxed text-base md:text-lg">
            Zahaba Tours offers a seamless travel experience with customizable
            tour packages, easy bookings, and user-friendly features.
            <br className="hidden md:block" />
            Discover, plan, and manage your dream trips all in one place.
          </p>

          <Link to="all-packages">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl flex items-center gap-3 group mx-auto"
            >
              View All Destinations
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
