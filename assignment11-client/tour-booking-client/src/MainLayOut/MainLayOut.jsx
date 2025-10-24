import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion } from "framer-motion"
const MainLayOut = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;


            const distanceFromBottom = scrollHeight - (scrollY + windowHeight);


            setShowScrollDown(scrollY < 100 ? false : distanceFromBottom > 400);


            setShowScrollUp(scrollY > 100);


        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleScrollToDown = () => {
        // Scroll down one screen height for a "smooth step" effect
        window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <div className="mx-auto relative overflow-hidden">
            <Navbar />
            <div className="mx-auto md:min-h-screen">
                <Outlet />
            </div>


            <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">


                {showScrollUp && (
                    <button
                        onClick={handleScrollToUp}

                        className="btn border-none  text-blue-900 rounded-full size-10 md:size-12 bg-gradient-to-t from-sky-400 via-sky-100 to-white hover:bg-sky-700 transition-colors duration-300 shadow-2xl"
                    >
                        <motion.span
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <FaArrowUp />
                        </motion.span>


                    </button>
                )}


                {showScrollDown && (
                    <button
                        onClick={handleScrollToDown}

                        className="btn border-none shadow text-white rounded-full size-10 md:size-12 bg-gradient-to-b from-sky-300 via-sky-500 to-sky-900 hover:bg-sky-700 transition-colors duration-300"
                    ><motion.span
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                            <FaArrowDown />
                        </motion.span>

                    </button>
                )}
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayOut;