
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MainLayOut = () => {
    const [showUp, setShowUp] = useState(false);
    const [showDown, setShowDown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;

            // At top → only show down
            if (scrollY < 100) {
                setShowDown(true);
                setShowUp(false);
            }
            // At bottom → only show up
            else if (scrollY + windowHeight >= scrollHeight - 100) {
                setShowDown(false);
                setShowUp(true);
            }
            // In the middle → show both
            else {
                setShowDown(true);
                setShowUp(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScrollToDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="mx-auto relative overflow-hidden">
            <Navbar />

            <div className="mx-auto md:min-h-screen">
                <Outlet />
            </div>

            {/* Scroll Buttons */}
            <div className="fixed bottom-10 right-10 z-50 flex justify-center items-center gap-3">
                <AnimatePresence>
                    {showDown && (
                        <motion.button
                            key="scroll-down"
                            onClick={handleScrollToDown}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center rounded-full shadow text-white 
                   lg:w-12 lg:h-12 w-8 h-8 
                   bg-gradient-to-b from-sky-300 via-sky-500 to-sky-800 
                   hover:brightness-110 transition-all duration-300"
                        >
                            <FaArrowDown className="lg:text-xl text-xs" />
                        </motion.button>
                    )}

                    {showUp && (
                        <motion.button
                            key="scroll-up"
                            onClick={handleScrollToUp}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center rounded-full shadow text-white 
                   lg:w-12 lg:h-12 w-8 h-8 
                   bg-gradient-to-t from-sky-300 via-sky-500 to-sky-800 
                   hover:brightness-110 transition-all duration-300"
                        >
                            <FaArrowUp className="lg:text-xl text-xs" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>


            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayOut;

