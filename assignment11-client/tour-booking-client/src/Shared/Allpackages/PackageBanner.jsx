import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/banner1.jpg";

const PackageBanner = ({ packages }) => {
  return (
    <div
      className="h-[450px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white/20 backdrop-blur-md py-8 px-6 rounded-3xl w-[90%] md:w-3/4 lg:w-2/3 text-center shadow-xl"
      >
        <motion.h1 
         initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-4xl md:text-5xl mb-6 text-gray-800">
          <span className="text-[#fcba03]">{packages.length}</span> Packages are ready for you!
        </motion.h1>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed dancing-script font-bold">
          From breathtaking natural wonders to vibrant city experiences.
          <br className="hidden md:block" />
          Find the perfect trip that matches your dream destination.
        </p>
      </motion.div>
    </div>
  );
};

export default PackageBanner;
