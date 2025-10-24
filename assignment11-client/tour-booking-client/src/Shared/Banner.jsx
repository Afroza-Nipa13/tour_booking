import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import Lottie from 'lottie-react';
import videoBg from "../assets/bannerVideo/bannerVideo.mp4"
import { FaArrowRight } from 'react-icons/fa';


const Banner = () => {


  return (

    <div
      className="hero min-h-[500px] w-[100%] p-0 m-0">
      <video
        className='w-[100%] h-[100%] object-cover'
        src={videoBg} autoPlay loop muted />
      <div className="hero-content p-5 relative text-success  rounded-3xl text-shadow-2xs text-center">
        <div className="content py-5">
          <div className='bg-white bg-overlay opacity-80 px-10 py-8 rounded-lg'>
            <h1 className="mb-5 text-5xl text-gray-700 font-semibold"><motion.span
              className="dancing-script italic font-bold"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Explore
            </motion.span> <br /> <motion.span
              className="font-extrabold text-7xl"
              animate={{
                color:
                  ["#fc036f", "#815196", "#f0b30e", "#5cd19c", "#4df0c2", "#4d99f0", "#0a65cc", "#246bbd", "#7b24bd", "#dd71e3", "#e3718f"],
                transition: { duration: 20, repeat: Infinity }

              }}>Zahaba Tours</motion.span> <br />Your Trusted Travel Companion</h1>
            <p className="mb-5 text-gray-700">
              Zahaba Tours offers a seamless travel <br />experience with customizable tour packages, easy bookings, and <br />user-friendly features. Discover, plan, and manage your dream trips all in one place effortlessly.
            </p>
          </div>

          <Link
            to='all-packages'>
            <motion.button

              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl flex items-center gap-3 group mx-auto"
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


        </div>
      </div>
    </div>

  );
};

export default Banner;