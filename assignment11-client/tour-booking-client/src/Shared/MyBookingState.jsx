import React from 'react';
import useAuth from '../Components/Hooks/useAuth';


const MyBookingState = () => {
  const {user}=useAuth()
  // console.log(user)
    return (
        <div 
        className='p-10 min-h-[400px] md:h-[300px] h-[200px] bg-no-repeat w-full bg-cover bg-center items-center' style={{backgroundImage:(`url(https://media.istockphoto.com/id/1159412968/photo/tropical-underwater-shot-with-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlxgE4n07z9itD5-n-yusqh1_RyuBxH6lmvU-6sumKQ=)`)}}>
          <div className="stats shadow bg-white lg:mt-20 mt-10">
  <div className="stat ">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Total Booking</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar avatar-online">
        <div className="w-16 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>
        </div>
    );
};

export default MyBookingState;