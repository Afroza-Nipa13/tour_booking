import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../Shared/Banner';
import AllPackage from './AllPackage';
import Footer from '../Shared/Footer';
import Loader from '../Pages/Loader';
import OurClients from '../Pages/OurClients';
import Offers from '../Pages/Offers';
import { FaArrowUp } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import Blogs from './Blogs/Blogs';
import TermsAndCondition from '../Pages/TermsAndCondition';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TourPromotion from '../Shared/TourPromotion';
import PopularDestination from '../Shared/PopularDestination';


const Home = () => {
const [allpackages, setAllPackages] = useState([]);

useEffect(()=>{
fetch("https://tour-booking-server-five.vercel.app/getSixPackages").then(res=>res.json())
.then(data=>{
  // console.log(data)
  setAllPackages(data)
})
},[])


 
   
return (
        <div className=''>
          <Helmet>
                <title>Zahaba| Home</title>
            </Helmet>
          <Banner></Banner>
          <div className='max-w-11/12 mx-auto my-10'>
            <Suspense fallback={<Loader></Loader>}>
            <AllPackage allPackages={allpackages}></AllPackage>
          </Suspense>
          </div>
          
          <div>
            {/* <Blogs/> */}
          </div>
          <div>
            <PopularDestination/>
          </div>

          <div>
            <TermsAndCondition />
          </div>
          <div>
            <Offers></Offers>
          </div>
          <div>
            <PrivacyPolicy/>
          </div>
          <div>
            <OurClients></OurClients>
          </div>
          <div>
            <TourPromotion/>
          </div>
          
        </div>
    );
};

export default Home;