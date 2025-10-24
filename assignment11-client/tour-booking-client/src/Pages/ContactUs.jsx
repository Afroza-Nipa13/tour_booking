import React from 'react';
import GoogleMap from './GoogleMap';


import { FaPhone, FaUser, FaUserMd } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { FaArrowUp } from 'react-icons/fa6';

const ContactUs = () => {
   
    return (
        <div className='mb-12'>
            <Helmet>
                <title>Zahaba | Contact Us</title>
            </Helmet>
           
            <div className='flex lg:flex-row-reverse flex-col gap-5 mx-auto justify-center items-center lg:w-7xl'>
                <div className="flex-1 px-4 my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
                    <h2 className="divider uppercase text-secondary text-center mb-10 font-semibold text-4xl">
                        Contact us
                    </h2>
                    <div className='md:flex my-12 justify-between mx-auto'>
                        <div className='flex flex-col justify-start items-start space-y-7'>
                            <h3 className="text-base uppercase md:text-lg font-semibold">
                                Speak to a Destination Expert?
                            </h3>
                            <p className='flex gap-2'><FaPhone /> Call 177-233-788</p>
                            <p className='flex gap-2'><FaUserMd /> Chat with an expert</p>
                        </div>
                        <div className='flex flex-col justify-start md:mt-20 items-start space-y-5'>
                            <div className='text-start'>
                                <h3 className="text-base uppercase md:text-lg font-semibold">
                                    Zahaba Tour Ltd.</h3>
                                <p>
                                    2207 Concord Pike, #645 <br />
                                    Wilmington, DE 19803 USA <br />
                                    1 888 903 2001
                                </p>
                            </div>

                            <div className='text-start'>
                                <h3 className="text-base uppercase md:text-lg font-semibold">Marketing Department</h3>
                                <p>media@Zahaba.com</p>
                            </div>

                            <div className='text-start'>
                                <h3 className="text-base uppercase md:text-lg font-semibold">Travel Agent Support Team</h3>
                                <p>agents@zahabatours.com</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
                <div className='flex-1 mt-40'>
                    <img
                    className='w-[500px]' 
                    src="https://img.freepik.com/free-photo/closeup-hand-writing-note-while-phone_53876-14460.jpg?uid=R173359538&ga=GA1.1.350945533.1746408520&semt=ais_hybrid&w=740" alt="" />
                </div>
            </div>
            
             <GoogleMap></GoogleMap>
           
        </div>

    );
};

export default ContactUs;