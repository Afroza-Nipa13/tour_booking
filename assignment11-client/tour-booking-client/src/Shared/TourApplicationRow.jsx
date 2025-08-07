import React from 'react';
import useAuth from '../Components/Hooks/useAuth';
import { confirmBooking } from '../Components/Api/bookingsApi';
import Swal from 'sweetalert2';


const TourApplicationRow = ({ booking, index, myBookings, setMyBookings }) => {
  const { _id,image, tour_name, guide_name, guide_contact_no, departure_date, departure_location, destination, note } = booking;
  const { user } = useAuth()


  const handleConfirmButton = async (_id) => {
  const result =  await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!"
    })
      if (result.isConfirmed) {
        try {
      const response = await confirmBooking(booking._id, user.accessToken)
        // console.log(response)  
      if (response.modifiedCount > 0) {
        Swal.fire({
          title: "Confirmed!",
          text: "Your package confirmed successfully.",
          icon: "success"
        });
       
        const remainingBookings = myBookings.map(b =>{
          // console.log(b._id, booking._id) 
         return b._id === _id ? {...b,status:"completed"}:b;
        })
        
        setMyBookings(remainingBookings)
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while confirming.",
        icon: "error"
      });
    }
        
      }
    ;

    

  }


  return (
    <tr>
      <th>
        <label>
          <p>{index + 1} </p>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{tour_name}</div>
            <div className="text-sm opacity-50">{destination}</div>
          </div>
        </div>
      </td>
      <td className='hidden lg:block'>
        {guide_name}
        <br />
        <span className="badge badge-ghost badge-sm">{guide_contact_no}</span>

      </td>
      <td className=''>{departure_date}</td>
      <td className='hidden lg:block'>{departure_location}</td>
      <td>
        {
          booking.status === "completed" ? (
            <span className='text-green-600 font-bold'>Completed</span>
          ) : (
            <button onClick={()=>handleConfirmButton(_id)} className="btn btn-warning text-base-100 btn-xs md:btn-sm whitespace-nowrap">Confirm</button>
          )
        }

      </td>

    </tr>
  );
};

export default TourApplicationRow;