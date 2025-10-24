import axios from 'axios';
import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPostedPackageList = ({ packageCreatedByPromise }) => {
  const initialPackages = use(packageCreatedByPromise)
  const [packages, setPackages] = useState(initialPackages)
  const handleDelete = (_id) => {
    // console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from database
        axios.delete(`http://localhost:3000/all-packages/${_id}`).then(res => {
          // console.log(res.data)
          if (res.data.deletedCount > 0) {

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remainingPackages = packages.filter(pack => pack._id !== _id)
            setPackages(remainingPackages)
          }
        })



      }
    });

  }
  return (
    <div className="overflow-x-auto text-center items-center mx-auto max-w-11/12 my-10 space-y-7">
      <Helmet>
        <title>Zahaba|My Posted Packages</title>
      </Helmet>
      <h3 className='text-4xl font-bold text-sky-600'>Manage My posted packages </h3>
      <p>Total Added Packages : <span className='text-red-600'> {packages.length}</span></p>
      <table className="table max-w-11/12   mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Tour name</th>
            <th>Total Booked</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {
            packages.map((pack, index) => <tr
              key={pack._id}
              className="bg-base-200">
              <th>{index + 1}</th>
              <th>{pack.tour_name}</th>
              <td>{pack.bookingCount}</td>

              <td><Link
                to={`/updatePackages/${pack._id}`}><button className='btn btn-sm'>Edit</button></Link></td>
              <td><button onClick={() => handleDelete(pack._id)} className='btn btn-sm'><FaDeleteLeft className='text-error' size={20} /></button></td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default MyPostedPackageList;