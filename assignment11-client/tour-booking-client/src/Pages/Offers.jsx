import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router';
import { motion } from "framer-motion"
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/background.json'
import traveller from "../assets/traveller.png"

const Offers = () => {


  return (

    <div
      className="container md:mx-auto relative w-[100%] overflow-hidden hero  min-h-[400px] mb-20 rounded-2xl"

    >
      <div className="lottie-background absolute top-0 left-0 w-[100%] h-[100%] z-0">
        <Lottie animationData={animationData} loop={true} autoplay={true}></Lottie>
      </div>
      <div className="hero-content relative z-10 p-5 ">
        <div className="flex lg:flex-row flex-col justify-between lg:px-10 py-5 px-5">
          <div className='flex-1'>
            <motion.img
              className='w-full max-w-[400px] mx-auto'
              initial={{ x: -100, opacity: 0, scale: 1.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ese: "easeOut" }}
              src={traveller} alt="" />
          </div>
          <div className='flex-1 text-gray-700 md:mt-10 text-shadow-2xs text-center'>
            <motion.h1
              initial={{ x: 300, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-5 lg:text-6xl md:text-4xl text-3xl font-bold"><span className='text-yellow-600 hover:text-yellow-300 font-extrabold'>Eid Celebration </span>  Offer – Flat <br /><span className='hover:text-red-600'>10% OFF!</span></motion.h1>
            <p className="mb-5 leading-8">
              Celebrate this Eid with unforgettable journeys! Book your favorite tour package now and enjoy a special 10% discount on all bookings. Limited-time offer – don't miss out on making memories that last a lifetime!
            </p>
            <Link to='/all-packages'>
              <motion.button
                className="btn bg-orange-500 border-none text-white rounded-full gap-2"
                whileHover={{ scale: 1.2 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                Explore more
                <FiArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Offers;