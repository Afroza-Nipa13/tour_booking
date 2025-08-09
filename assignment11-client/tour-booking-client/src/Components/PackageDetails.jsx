import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FcAlarmClock } from "react-icons/fc";
import { FaCalculator, FaCalendar, FaPlane } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';


const PackageDetails = () => {
    const tourPack = useLoaderData()
   
    const {_id,package_details,guide_contact_no,tour_name,guide_email,guide_photo,image,guide_name,bookingCount,duration,departure_location,departure_date,destination,price }= tourPack;
    return (
        <div className="my-10 px-4">
          <Helmet>
                <title>Zahaba| Details</title>
            </Helmet>
  <div className="lg:max-w-full mx-auto bg-base-100 shadow-xl py-10 px-6 rounded-3xl space-y-10">

    
    <img
      className="w-full h-[450px] object-cover rounded-2xl"
      src={image}
      alt={tour_name}
    />

    
    <div className="text-center space-y-3">
      <h2 className="text-4xl text-teal-600 font-bold">Package Name: {tour_name}</h2>
      <p className="text-2xl text-teal-600 badge px-5 py-4"> Destination: {destination}</p>
    </div>

    
    <div className="bg-base-200 p-8 rounded-xl border border-gray-200 space-y-4">
      <p className="text-lg font-semibold text-accent flex gap-2 items-center"><FcAlarmClock/> Duration: {duration}</p>
      <p className="text-base text-accent leading-relaxed">{package_details}</p>
      <p className="text-lg font-semibold text-accent flex gap-2 items-center"><FaPlane className='text-blue-400' /> Departure Location: {departure_location}</p>
      <p className="text-lg font-semibold text-accent flex gap-2 items-center"><FaCalendar className='text-red-400' /> Departure Date: {departure_date}</p>
      <p className="text-lg font-semibold text-accent flex gap-2 items-center"><FaCalculator className='text-yellow-600' /> Booking Count: {bookingCount}</p>
    </div>

    
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <img
        src={guide_photo}
        alt={guide_name}
        className="w-32 h-32 object-cover rounded-full border-4 border-teal-500 shadow"
      />
      <div className="text-center md:text-left space-y-1">
        <h3 className="text-xl font-bold text-teal-600">{guide_name}</h3>
        <p className="text-sm text-accent">✉️ Email: {guide_email}</p>
        <p className="text-sm text-accent">📞 Contact: {guide_contact_no}</p>
      </div>
    </div>

    <hr className='border border-b-2 border-teal-600 opacity-25' />

    
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-semibold text-teal-600"> Price:<span className='text-accent'> BDT {price}</span></h2>
      <Link to={`/package/${_id}`}>
        <button className="btn bg-sky-600 text-white hover:bg-sky-700 lg:text-2xl text-lg lg:px-20 px-10 py-6">Book Now</button>
      </Link>
    </div>
  </div>
</div>


    );
};

export default PackageDetails;