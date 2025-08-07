import React from 'react';
import { NavLink } from 'react-router';

const WhatWillGet = () => {
    return (
        <div>
            <div>
                <div>
                    <h2 className='text-3xl font-semibold uppercase'>What Will you receive</h2>
                    <ul className='flex justify-around pt-10'>
                        <NavLink><li>
                            Personalized
                            journeys</li></NavLink>
                        <NavLink><li>
                            Expert
                            planning</li></NavLink>
                        <NavLink><li>
                            Private
                            guides</li></NavLink>
                    </ul>
                </div>
                <div className='my-10 space-y-8'>
                    <div className='flex md:flex-row flex-col gap-8 justify-center mx-auto bg-base-200 rounded-3xl'>
                        <div className='flex-1'>
                            <img
                                className='object-fit w-[500px] h-[400px] overflow-hidden rounded-lg'
                                src="https://media.istockphoto.com/id/2181891613/vector/speech-bubbles-forming-brain-communication-concept.jpg?s=612x612&w=0&k=20&c=lWdTHuqlsvUOc8CcR7MKNLKihy8kafi6opdKQTCWBUE=" alt="" />
                        </div>
                        <div className='flex-1 mt-10 text-start space-y-8 '>
                            <h1 className='text-accent font-semibold mb-5 text-3xl'>Every journey begins with a conversation.</h1>
                            <p>We think care and curation make all the difference in the world. Understanding your travel vision is the first priority.</p>
                            <ul>
                                <li>No fixed dates or schedules</li>
                                <li>The freedom of flexibility</li>
                                <li>Tailor-made for you</li>
                                <li>Accommodating your every need</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex md:flex-row-reverse flex-col gap-8 justify-center mx-auto bg-base-200 rounded-3xl'>
                        <div className='flex-1'>
                          <img
                                className='object-fit w-[500px] h-[400px] overflow-hidden rounded-lg'
                                src="https://cdn.pixabay.com/photo/2022/08/10/18/57/lake-7377942_640.jpg" alt="" />   
                        </div>
                        <div className='flex-1 mt-10 ml-10 text-start space-y-8 '>
                            <h1 className='text-accent font-semibold mb-5 text-3xl'>Itineraries designed by well-traveled experts.</h1>
                            <p>Our Destination Experts are people with deep, local knowledge of the areas they represent, having lived, worked or traveled extensively throughout the region.</p>
                            <ul>
                                <li>Our Destination Experts are people with deep, local knowledge of the areas they represent, having lived, worked or traveled extensively throughout the region.</li>
                                <li>The freedom of flexibility</li>
                                <li>A single point of contact</li>

                            </ul>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col gap-8 justify-center mx-auto bg-base-200 rounded-3xl'>
                        <div className='flex-1'>
                            <img
                                className='object-fit w-[500px] h-[400px] overflow-hidden rounded-lg'
                                src="https://png.pngtree.com/png-clipart/20220617/ourmid/pngtree-cool-travelling-van-tropical-png-image_5125592.png" alt="" />
                        </div>
                        <div className='flex-1 mt-10 text-start space-y-8 '>
                            <h1 className='text-accent font-semibold mb-5 text-3xl'>Your trip. Our responsibility.</h1>
                            <p>With our industry-leading, 24/7 support and operational expertise you’ll travel with peace of mind. Should hiccups occur, you can rest assured that our round-the-clock assistance is only a phone call away.</p>
                            <ul>
                                <li>The moment you touch down</li>
                                <li>Live updates</li>
                                <li>We’re invested in your trip</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default WhatWillGet;