import { APIProvider, Map } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';

const GoogleMap = () => {
    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const fullText =`Zahaba Tours is one of the most trusted travel service providers in Bangladesh, offering unique and immersive tour experiences across both popular and offbeat destinations. Our operations extend beyond just famous tourist spots – we explore remote areas, islands, hills, and rural regions to deliver authentic experiences. We primarily operate in regions like Sundarbans, Cox’s Bazar, Rangamati, Bandarban, Sylhet, Saint Martin’s Island, Sunamganj, and the Barind Tract. Each location is handled with care, ensuring safety and learning opportunities through experienced guides. Our mission at Zahaba Tours is not just about travel, but also about showcasing the natural beauty, heritage, and culture of Bangladesh while supporting local communities. We believe travel is not just entertainment but also an opportunity to learn and grow. That’s why every trip is carefully curated to make sure our clients don’t just see the place—they feel it. Zahaba Tours is committed to providing both domestic and international travelers with memorable experiences that are informative, culturally rich, and socially responsible. We continuously strive to improve our services, making travel in Bangladesh more accessible, enjoyable, and meaningful for everyone. Come and explore the unseen with us. `

    const [showAll, setShowAll]=useState(false)
    const ToggleButton=()=>{
        setShowAll(!showAll)
    }

    const words =fullText.split(" ")
    const isLongText = words.length > 100;
    const displayedText = showAll? fullText : words.slice(0, 100).join(" ") + (isLongText? "..." : " ")

    return (
        <div className='w-[80%] mx-auto flex lg:flex-row flex-col gap-8 justify-center lg:mt-10 mt-40'>
            <div className='lg:flex-1 lg:space-y-8 lg:mt-10'>
                <h1 className='text-4xl divider mb-12 font-bold text-primary'>Where We Work</h1>
                <p>
                   {displayedText} 

                </p>
               {
                isLongText && (
                     <button 
                onClick={ToggleButton}
                className='cursor-pointer border-none text-primary'>{showAll? "See less" : "See more"}</button>
                )
               }
            </div>
            <div className=' lg:flex-1 md:w-[50%] w-full h-[300px] sm:h-[400px]'>
                <APIProvider apiKey={GOOGLE_API_KEY}>
                    <Map
                        style={{ width: '100%', height: '100%' }}
                        defaultCenter={{ lat: 23.8103, lng: 90.4125 }} // ঢাকা শহর
                        defaultZoom={10}
                        gestureHandling={'greedy'}
                        disableDefaultUI={false} />

                </APIProvider>

            </div>
        </div>
    );
};

export default GoogleMap;