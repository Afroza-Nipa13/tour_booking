import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../Shared/Banner';
import AllPackage from './AllPackage';
import Footer from '../Shared/Footer';
import Loader from '../Pages/Loader';
import OurClients from '../Pages/OurClients';
import Offers from '../Pages/Offers';
import { FaArrowUp } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';


const Home = () => {
const [allpackages, setAllPackages] = useState([]);

useEffect(()=>{
fetch("https://tour-booking-server-five.vercel.app/getSixPackages").then(res=>res.json())
.then(data=>{
  // console.log(data)
  setAllPackages(data)
})
},[])

const handleScrollToUp=()=>{
  window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}
 
   
return (
        <div className=''>
          <Helmet>
                <title>Zahaba| Home</title>
            </Helmet>
          <Banner></Banner>
          <div className='max-w-7xl mx-auto my-10'>
            <Suspense fallback={<Loader></Loader>}>
            <AllPackage allPackages={allpackages}></AllPackage>
          </Suspense>
          </div>
          
          
          <div>
            <Offers></Offers>
          </div>
          <div>
            <OurClients></OurClients>
          </div>
          <div className='flex justify-end mx-10 my-10'>
            <button onClick={handleScrollToUp} className='btn text-white rounded-full size-12 bg-radial-[at_25%_25%] from-sky-200 via-blue-400 to-indigo-900 to-90%'><FaArrowUp /></button>
          </div>
        </div>
    );
};

export default Home;