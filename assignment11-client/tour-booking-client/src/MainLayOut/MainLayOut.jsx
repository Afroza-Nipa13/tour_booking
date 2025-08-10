import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Banner from '../Shared/Banner';


const MainLayOut = () => {

    //  useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         once: false,
    //         mirror: false,
    //     })
    // }, [])
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            
            
            <div className='mx-auto md:min-h-screen'>
                <Outlet></Outlet>
            </div>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MainLayOut;