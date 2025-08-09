import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion"
import Footer from '../Shared/Footer';
import SeeTheWorld from '../Pages/SeeTheWorld';
import WhatWillGet from '../Pages/WhatWillGet';
import { Helmet } from 'react-helmet-async';
import { FaArrowUp } from 'react-icons/fa6';

const AboutUs = () => {
    const handleScrollToUp=()=>{
  window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}
    return (
        <div>
            <Helmet>
                <title>Zahaba | About Us</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='my-10'>

            </div>

            <div>
                <div className="py-20 px-6 md:px-24 bg-base-100 text-center items-center space-y-10">
                    <h1 className='divider text-secondary text-center mb-10 font-semibold text-5xl'>About Us</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        We are a passionate travel agency committed to delivering unforgettable experiences across Bangladesh and beyond. With years of expertise, trusted guides, and carefully curated packages, we ensure your journey is safe, comfortable, and full of adventure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="bg-sky-800 text-gray-100 p-6 rounded-2xl shadow">
                            <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" className="w-12 mx-auto mb-4" alt="" />
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                            <p className="text-gray-300">To provide affordable, exciting, and safe travel experiences for all kinds of travelers.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="bg-base-200 p-6 rounded-2xl shadow">
                            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className="w-12 mx-auto mb-4" alt="" />
                            <h3 className="text-xl font-semibold">Our Team</h3>
                            <p className="text-gray-600">We have a team of experienced guides, planners, and travel lovers ready to support you 24/7.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }} className="bg-sky-800 text-gray-100 p-6 rounded-2xl shadow">
                            <img src="https://cdn-icons-png.flaticon.com/128/3468/3468370.png" className="w-12 mx-auto mb-4" alt="" />
                            <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                            <p className="text-gray-300">Trusted by 1000+ travelers, our tours are designed for comfort, fun, and lifelong memories.</p>
                        </motion.div>
                    </div>
                    <SeeTheWorld />
                    <WhatWillGet />

                    <div className='flex justify-end mx-10 my-10'>
                    <button onClick={handleScrollToUp} className='btn text-white rounded-full size-12 bg-radial-[at_25%_25%] from-sky-200 via-blue-400 to-indigo-900 to-90%'><FaArrowUp /></button>
                </div>
                </div>
                
            </div>
            <Footer />

        </div>
    );
};

export default AboutUs; 