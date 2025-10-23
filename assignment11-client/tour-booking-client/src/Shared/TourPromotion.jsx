import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";


const TourPromotion = () => {
    return (
        <div className="container mx-auto px-2 py-16">
            {/* The main container uses a flex layout. It's a column on small screens (default)
          and a row on large screens (lg:flex-row). */}
            <div className="w-full flex flex-col lg:flex-row items-center rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10">

                {/* Image Grid Section */}
                {/* This section takes up the full width on small screens and half the width on large screens. */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 rounded-xl overflow-hidden mb-8 lg:mb-0 lg:mr-8">

                    {/* Each image container maintains a 1:1 aspect ratio for a consistent grid. */}
                    <div className="relative pt-[100%]">
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2940"
                            alt="Mountain lake with clear water"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                    <div className="relative pt-[100%]">
                        <img
                            src="https://images.pexels.com/photos/18911917/pexels-photo-18911917/free-photo-of-crowd-on-a-street-market-in-asia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Street market in a vibrant city"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                    <div className="relative pt-[100%]">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/042/588/464/small_2x/the-famous-temple-of-poseidon-in-greece-with-cloudy-sky-in-greek-mythology-the-god-of-the-sea-cape-sounion-ruins-of-the-ancient-temple-during-cloudy-weather-photo.jpg"
                            alt="Ancient ruins with a cloudy sky"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                    <div className="relative pt-[100%]">
                        <img
                            src="https://www.shutterstock.com/image-photo/small-boat-floats-peacefully-on-600nw-2485843149.jpg"
                            alt="Boat on a calm sea at sunset"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>

                {/* Text Description Section */}
                {/* This section also takes up the full width on small screens and half the width on large screens. */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 text-center lg:text-left">
                    <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 divider"
                                >
                        Unforgettable <br />Adventures Await
                    </motion.h2>
                    <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                        Discover our exclusive "Grand European Tour" package, a 14-day journey through the most iconic cities in Europe. Immerse yourself in history, art, and breathtaking landscapes as you explore Paris, Rome, and Venice. This all-inclusive plan handles everything from flights and luxury accommodations to guided tours and authentic local experiences, ensuring a seamless and memorable trip.
                    </p>
                    <Link to='/all-packages'>
                        <button
                            className="self-center cursor-pointer lg:self-start px-8 py-3 bg-sky-600 text-white font-bold text-base rounded-full shadow-lg hover:bg-sky-700 transition-colors duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                            Explore Tour Plans
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourPromotion;