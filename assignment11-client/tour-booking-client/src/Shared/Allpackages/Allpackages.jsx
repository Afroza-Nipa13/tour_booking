import React, { useEffect, useState } from 'react';
import PackageCard from '../PackageCard';
import PackageBanner from './PackageBanner';


import Loader from '../../Pages/Loader';
import { FaArrowUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const Allpackages = () => {
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState("");
    const [packages, setPackages] = useState([])

    useEffect(() => {
        if (searchText) {
            setLoading(true)
            fetch(`https://tour-booking-server-five.vercel.app/all-packages?search=${searchText}`).then(res => res.json())
                .then(data => {

                    setPackages(data)
                    setLoading(false)
                }
                )
        } else {
            setLoading(true)
            fetch('https://tour-booking-server-five.vercel.app/all-packages').then(res => res.json())
                .then(data => {

                    setPackages(data)
                    setLoading(false)
                }
                )

        }

    }, [searchText])

    const handleScrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='items-center text-center mb-8'>
            <Helmet>
                <title>Zahaba | All Packages</title>
            </Helmet>

            <div>

                <PackageBanner
                    packages={packages}></PackageBanner>

            </div>
            {/* search button */}

            <div className='bg-base-200 lg:w-3xl py-8 px-5 rounded-4xl shadow-lg my-8 mx-auto sticky top-30 left-0 z-10'>
                <input type="text" placeholder="Search by your desire destination..." className="input input-lg" onChange={(e) => setSearchText(e.target.value)} />

            </div>

            {/* loading */}
            {
                loading ? (<Loader></Loader>)
                    : (

                        <>
                            {
                                packages.length === 0 ? (
                                    <p className='text-4xl'>No data matches..</p>
                                )
                                    :
                                    (
                                        // package grid

                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 mx-auto py-10 md:max-w-7xl'>

                                            {
                                                packages.map(tourPack => <PackageCard tourPack={tourPack}
                                                    key={tourPack._id}></PackageCard>)
                                            }

                                        </div>
                                    )}

                        </>




                    )}


            <div className='flex justify-end mx-10 my-10'>
                <button onClick={handleScrollToUp} className='btn text-white rounded-full size-12 bg-radial-[at_25%_25%] from-sky-200 via-blue-400 to-indigo-900 to-90%'><FaArrowUp /></button>
            </div>

        </div>
    );
};


export default Allpackages;