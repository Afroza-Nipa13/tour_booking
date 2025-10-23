
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Banner from '../Shared/Banner';
import { FaArrowUp } from 'react-icons/fa';

const MainLayOut = () => {

    const handleScrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='mx-auto relative'>
            <Navbar></Navbar>

            <div className='mx-auto md:min-h-screen'>
                <Outlet></Outlet>
            </div>
            <div className='fixed bottom-10 right-10 z-50'>
                <button onClick={handleScrollToUp} className='btn border-none shadow size-12btn text-white rounded-full size-12 bg-radial-[at_25%_25%] from-sky-200 via-sky-500 to-sky-900 to-90% hover:bg-sky-700 transition-colors duration-300'><FaArrowUp /></button>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayOut;