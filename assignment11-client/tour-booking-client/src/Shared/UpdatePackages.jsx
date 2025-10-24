import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../Components/Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const UpdatePackages = () => {
  const { user } = useAuth();
  const { packageId } = useParams()
  const { _id, tour_name, image, destination, departure_date, departure_location, duration, price, guide_name, guide_contact_no, package_details } = useLoaderData();



  const handleUpdatePackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPackage = Object.fromEntries(formData.entries())
    // console.log(updatedPackage)

    axios.put(`http://localhost:3000/all-packages/${_id}`, updatedPackage).then(res => {
      // console.log(res.data)
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: 'success',
          title: 'Status updated successfully.',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    }).catch(error => {
      // console.log(error)
    })
  }
  return (
    <div className='mx-auto text-center items-center lg:my-10 md:my-8 my-5'>
      <Helmet>
        <title>Zahaba|Update</title>
      </Helmet>
      {/* <h2 className='md:text-2xl font-bold'>Bookings for packageId : {packageId}</h2> */}

      <div className='lg:w-6xl mx-auto'>
        <div className='p-12 text-center space-y-4'>
          <h1 className='md:text-5xl text-secondary divider font-bold'>Update Package </h1>

        </div>
        <form onSubmit={handleUpdatePackage}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Tour Name</label>
              <input
                type='text'
                name='tour_name'
                defaultValue={tour_name}
                className='input w-full'
                placeholder='Tour Name'
              />
            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Photo</label>
              <input
                type='text'
                name='image'
                className='input w-full'
                placeholder='Photo URL'
                defaultValue={image}
              />
            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Destination</label>
              <input
                type='text'
                name='destination'
                className='input w-full'
                placeholder='destination'
                defaultValue={destination}
              />
            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Departure date</label>
              <input
                type='date'
                name='departure_date'
                className='input w-full'
                placeholder='Departure date'
                defaultValue={departure_date}
              />

            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Departure location</label>
              <input
                type='text'
                name='departure_location'
                className='input w-full'
                placeholder='Departure location'
                defaultValue={departure_location}
              />
            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>duration</label>
              <select defaultValue={duration} name='duration' className="select w-full">
                <option disabled={true}>Select duration</option>
                <option> 3 days</option>
                <option>5 days</option>
                <option>7 days</option>
              </select>
            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Price</label>
              <input
                type='text'
                name='price'
                className='input w-full'
                placeholder='price'
                defaultValue={price}
              />
            </fieldset>

            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Guide Name</label>
              <input
                type='text'
                name='guide_name'
                className='input w-full'
                placeholder='guide name'
                defaultValue={guide_name}
              />
            </fieldset>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Guide Email</label>
              <input
                type='text'
                name='guide_email'
                className='input w-full'
                defaultValue={user?.email}
                placeholder='guide_email'
                readOnly
              />
            </fieldset>


            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>guide_contact_no</label>
              <input
                type='number'
                name='guide_contact_no'
                className='input w-full'
                placeholder='guide contact no'
                defaultValue={guide_contact_no}
              />
            </fieldset>

            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4'>
              <label className='label'>Guide Photo</label>
              <input
                type='text'
                name='photo'
                className='input w-full'
                placeholder='Photo URL'
                defaultValue={user.photoURL}
              />
            </fieldset>

            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4'>
              <label className='label'>Package details</label>
              <input
                type='textarea'
                name='package_details'
                className='input w-full'
                placeholder='package_details'
                defaultValue={package_details}
              />
            </fieldset>
          </div>


          <input type='submit' className='btn w-full' value='Update Package' />
        </form>
      </div>
    </div>
  );
};

export default UpdatePackages;