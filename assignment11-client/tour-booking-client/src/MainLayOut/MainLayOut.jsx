import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Banner from '../Shared/Banner';

const MainLayOut = () => {
    return (
        <div className='bg-gray-50'>
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