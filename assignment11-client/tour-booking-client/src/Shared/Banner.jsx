import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import Lottie from 'lottie-react';
import videoBg from "../assets/bannerVideo/bannerVideo.mp4"


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
            <h1 className="mb-5 text-4xl text-gray-700 font-bold"> Explore <br /> <motion.span
              className="font-extrabold text-7xl"
              animate={{
                color:
                  ["#fcba03", "#e3b330", "#baa059", "#5cd19c", "#4df0c2", "#4d99f0", "#246bbd", "#7b24bd", "#dd71e3", "#e3718f"],
                transition: { duration: 20, repeat: Infinity }

              }}>Zahaba Tours</motion.span> <br />Your Trusted Travel Companion</h1>
            <p className="mb-5 text-gray-700">
              Zahaba Tours offers a seamless travel <br />experience with customizable tour packages, easy bookings, and <br />user-friendly features. Discover, plan, and manage your dream trips all in one place effortlessly.
            </p>
          </div>
          <Link
            to='all-packages'
            className="btn btn-wide rounded-full absolute left-[24%] md:left-[32%] lg:left-[34%] lg:bottom-[5%] bottom-[4%] 
             bg-sky-400 text-slate-900 font-bold border-none 
             hover:bg-sky-900 hover:text-slate-100 
             lg:text-xl lg:px-12 lg:py-6 transition-colors duration-300"
          >
            Explore more
          </Link>


        </div>
      </div>
    </div>

  );
};

export default Banner;