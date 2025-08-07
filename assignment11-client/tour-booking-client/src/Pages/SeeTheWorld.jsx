import React from 'react';
import { Link } from 'react-router';

const SeeTheWorld = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse gap-10 mx-auto my-20'>
            <div className='flex-1'>
            <img 
            className='rounded-xl'
            src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='flex-1 text-start mt-10'>
                <h2 className='text-4xl font-semibold mb-5 text-secondary'>SEE THE WORLD <br />
                DIFFERENTLY !</h2>
                <p>
                    We create personalized trips based on your preferences, this means no two trips are the same. Our expertise in over 100 countries worldwide means we take on all the complexities and logistics of planning your trip, so you can simply enjoy.
                </p>
                <p className='mt-5'>
                    Whether you’re looking for culturally immersive experiences, relaxation, culinary delights, exclusive access or unique places to stay, we make it happen. While your local private guide takes it one step further by helping you authentically experience their country. Your next journey is calling.


                </p>
                <Link to='/contact-us' className='btn btn-neutral mt-10'>Start Planning With An Expert</Link>
                
            </div>
            
        </div>
    );
};

export default SeeTheWorld;