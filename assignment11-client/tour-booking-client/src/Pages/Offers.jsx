import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/background.json';
import traveller from "../assets/traveller.png";

const Offers = () => {
  return (
    <section className="relative container md:mx-auto my-20 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Animated Lottie Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-10">
        
        {/* Left Side — Traveller Image */}
        <motion.div
  className="flex-1 flex justify-center"
  animate={{
    y: [0, -20, 0, 20, 0]  // Move up and down smoothly
  }}
  transition={{
    duration: 6,        // Total duration of one loop
    repeat: Infinity,   // Repeat forever
    ease: "easeInOut"   // Smooth in/out movement
  }}
>
  <img
    src={traveller}
    alt="Traveller celebrating Eid offer"
    className="w-full max-w-[420px] drop-shadow-2xl"
  />
</motion.div>


        {/* Right Side — Offer Text */}
        <motion.div
          className="flex-1 text-center lg:text-left mt-8 lg:mt-0 text-gray-800"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm md:text-3xl font-semibold text-gray-600 tracking-wide uppercase mb-3">
            Limited Time Deal
          </h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-600 dancing-script font-extrabold text-7xl">Eid Celebration Offer</span>  <br />Flat 
            <span className="hover:text-red-600"> 10% </span>OFF!
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Celebrate this Eid with <span className="font-semibold text-gray-800">exclusive travel discounts!</span>
            Book your dream tour now and enjoy <span className="text-orange-500 font-bold">10% off</span> all packages.
            Hurry — offer valid for a limited time only.
          </p>

          <Link to="/all-packages">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#e57300",
                boxShadow: "0px 8px 25px rgba(255,165,0,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-lg mx-auto lg:mx-0 shadow-lg"
            >
              Explore Packages <FiArrowRight size={22} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
