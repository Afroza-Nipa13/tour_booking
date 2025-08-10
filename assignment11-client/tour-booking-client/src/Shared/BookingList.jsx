import React, { use, useState } from 'react';
import TourApplicationRow from './TourApplicationRow';

const BookingList = ({myBookingsPromise}) => {
    const bookings = use(myBookingsPromise)
    const [myBookings, setMyBookings]= useState(bookings)
    // console.log(myBookingsPromise)
    return (
        <div className='my-10'>
        <h2 className="divider uppercase text-blue-600 text-center lg:mt-20 md:mt-10 font-semibold lg:text-5xl md:text-4xl text-2xl">
          Your Bookings</h2>
            <h3 className='text-2xl lg:mb-20 md:mb-10'> Total <span className='text-red-500 font-bold'>{myBookings.length}</span> bookings</h3>
            <div>
                <div className="overflow-x-auto w-full ">
  <table className="table table-zebra text-sm md:text-base">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Tour Name & Destination</th>
        <th className="hidden lg:block">Guide Name & Contact</th>
        <th className="">Departure Date</th>
        <th className='hidden lg:block'>Departure Location</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
      {

        myBookings.map((booking,index)=><TourApplicationRow 
            key={booking._id}
            index={index}
            myBookings={myBookings}
            setMyBookings={setMyBookings}
            booking={booking}></TourApplicationRow>)
      }
      
     
     
     
    </tbody>
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default BookingList;