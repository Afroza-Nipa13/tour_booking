import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import errorAnim from '../assets/lotties/error.json'
import Navbar from '../Components/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col md:flex-row-reverse gap-5 justify-center items-center'>
            <Lottie animationData={errorAnim} loop={true} style={{width:"500px", height:"500px"}}></Lottie>
        <div className='md:my-20 space-y-8 pt-10'>
            <h2 className='text-5xl text-shadow-2xs font-semibold leading-loose'><span className='font-extrabold text-red-600'> Opps!</span> <br />Seems you are lost<br></br> in himalaya...</h2>
            <Link to='/' className='btn btn-error mt-5'>Back to home</Link> 
        </div>

        </div>
        </div>
    );
};

export default Error;