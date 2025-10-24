import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import Sundorbans from "../assets/shundorban.jpg"
import CoxsBazar from "../assets/cox'sBazar1.jpg"
import Shajek from "../assets/ShajekVally.jpg"
import SaintMartin from "../assets/saintMartin.jpg"
import Sylhet from "../assets/Sylhet.jpg"
import KuaKata from "../assets/KuaKata1.jpg"
import Rangamati from "../assets/Rangamati.jpg"
import Bandarban from "../assets/Bandarban.jpg"
import Jaflong from "../assets/Jaflong.jpg"
import Srimangal from "../assets/TeaGarden.jpg"
import PaharpurBuddhistVihara from "../assets/PaharpurBuddhistVihara.jpg"
import LalbaghFort from "../assets/LalbaghFort.jpg"

export const destinations = [
    {
        id: 1,
        img: Sundorbans,
        title: "Sundarbans",
        location: "Khulna Division",
    },
    {
        id: 2,
        img: CoxsBazar,
        title: "Cox's Bazar",
        location: "Chittagong Division",
    },
    {
        id: 3,
        img: Shajek,
        title: "Sajek Valley",
        location: "Rangamati",
    },
    {
        id: 4,
        img: SaintMartin,
        title: "Saint Martin Island",
        location: "Bay of Bengal",
    },
    {
        id: 5,
        img: Sylhet,
        title: "Sylhet Tea Gardens",
        location: "Sylhet Division",
    },
    {
        id: 6,
        img: KuaKata,
        title: "Kuakata",
        location: "Patuakhali",
    },
    {
        id: 7,
        img: Rangamati,
        title: "Rangamati",
        location: "Chittagong Hill Tracts",
    },
    {
        id: 8,
        img: Bandarban,
        title: "Bandarban",
        location: "Chittagong Division",
    },
    {
        id: 9,
        img: Jaflong,
        title: "Jaflong",
        location: "Sylhet",
    },
    {
        id: 10,
        img: Srimangal,
        title: "Srimangal",
        location: "Moulvibazar",
    },
    {
        id: 11,
        img: PaharpurBuddhistVihara,
        title: "Paharpur Buddhist Vihara",
        location: "Naogaon",
    },
    {
        id: 12,
        img: LalbaghFort,
        title: "Lalbagh Fort",
        location: "Dhaka",
    },
];

const PopularDestination = () => {
    const navigate = useNavigate();

    const handleGalleryClick = () => {
        navigate("/gallery");
    };

    const handleImageClick = (destinationId) => {
        navigate(`/gallery/${destinationId}`);
    };

    return (
        <section className="relative w-full mx-auto py-20 bg-blue-100/60 backdrop-blur-sm">
            <div className="px-10 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl dancing-script italic font-bold text-gray-600 mb-2"
                >
                    Beautiful Bangladesh
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 divider"
                >
                    Explore the Beauty of Bangladesh
                </motion.h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                    Discover hidden gems and breathtaking destinations across Bangladesh.
                    Each place offers a unique experience waiting for you to explore.
                </p>

                {/* 🌍 Masonry Style Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleImageClick(1)}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative h-80 lg:mt-40"
                        >
                            <img
                                src={destinations[0].img}
                                alt={destinations[0].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                <div className="text-white text-left">
                                    <h4 className="text-xl font-bold">{destinations[0].title}</h4>
                                    <p className="text-blue-200">{destinations[0].location}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>
                    </div>

                    {/* Column 2 */}
                   <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleImageClick(3)}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative lg:h-96 h-80 "
                        >
                            <img
                                src={destinations[2].img}
                                alt={destinations[2].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                <div className="text-white text-left">
                                    <h4 className="text-xl font-bold">{destinations[2].title}</h4>
                                    <p className="text-blue-200">{destinations[2].location}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleImageClick(6)}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative lg:h-54 h-80"
                        >
                            <img
                                src={destinations[5].img}
                                alt={destinations[5].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                <div className="text-white text-left">
                                    <h4 className="text-xl font-bold">{destinations[5].title}</h4>
                                    <p className="text-blue-200">{destinations[5].location}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>
                    </div>
                        {/* column 3 */}

                         <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleImageClick(2)}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative lg:h-54 h-80"
                        >
                            <img
                                src={destinations[1].img}
                                alt={destinations[1].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                <div className="text-white text-left">
                                    <h4 className="text-xl font-bold">{destinations[1].title}</h4>
                                    <p className="text-blue-200">{destinations[1].location}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleImageClick(5)}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative lg:h-96 h-80"
                        >
                            <img
                                src={destinations[4].img}
                                alt={destinations[4].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                <div className="text-white text-left">
                                    <h4 className="text-xl font-bold">{destinations[4].title}</h4>
                                    <p className="text-blue-200">{destinations[4].location}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>
                    </div>

                    {/* Column 4 */}
                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleImageClick(4)}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative h-80 lg:mt-100"
                        >
                            <img
                                src={destinations[3].img}
                                alt={destinations[3].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                <div className="text-white text-left">
                                    <h4 className="text-xl font-bold">{destinations[3].title}</h4>
                                    <p className="text-blue-200">{destinations[3].location}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Centered Button */}
                <div className="flex justify-center items-center mt-12">
                    <motion.button
                        onClick={handleGalleryClick}
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
                </div>
            </div>
        </section>
    );
};

export default PopularDestination;