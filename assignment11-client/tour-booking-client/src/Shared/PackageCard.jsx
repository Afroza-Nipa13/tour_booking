import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router';

const PackageCard = ({tourPack}) => {
    const {_id,tour_name,duration,departure_date,guide_photo,image,guide_name,price,}= tourPack;
    return (
        <div className="card bg-base-100 hover:bg-blue-100 shadow-lg cursor-pointer">
  <figure className=' h-[35vh]'>
    <img className="w-full h-full object-cover overflow-hidden"
      src={image}
      alt={tour_name} />
  </figure>
  <div className="card-body">
  
  <div className='h-[90px]'>
    <h2 className="card-title text-2xl text-primary">{tour_name}</h2>
  </div>
  

  

  
  <div>
    {/* <h3 className="text-sm font-bold uppercase text-gray-500 mb-1">Guide</h3>
    <div className="flex bg-base-200 rounded-lg justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
            <img src={guide_photo} alt={guide_name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{guide_name}</h2>
          <p className="text-xs text-gray-500">Certified Tour Guide</p>
        </div>
      </div>
      
      <div className="badge badge-info text-white p-3 text-xs">
        ⭐ 4.8
      </div>

    </div> */}
  </div>
 <div>
  <div className='flex flex-col space-y-2'>
  <div className='flex flex-col justify-start text-start'>
    <h2 className=" text-sm text-gray-500">Duration : <span className='font-semibold text-primary'> {duration} </span></h2>
  <h2 className=" text-sm text-gray-500">Deparurture Date : <span className='font-semibold text-primary'>{departure_date}</span></h2>
  </div>
  {/* <h2 className="card-title text-lg text-primary">price :<span>{price} </span></h2> */}
  </div>
 </div>
  
  <div className="card-actions justify-end pt-2">
    <Link to={`/all-packages/${_id}`}>
      <button className="btn btn-info text-gray-800 flex gap-2 items-center">
        Details <FaLocationArrow />
      </button>
    </Link>
  </div>
</div>

</div>
    );
};

export default PackageCard;