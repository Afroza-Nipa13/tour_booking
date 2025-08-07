import React from 'react';
import useAuth from '../../Components/Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddPackage = () => {
  const { user } = useAuth();
  const handleAddPackage = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())
    const status = 'active';

    const date = new Date();
    const created_at = date.toISOString().split('T')[0]
    const newData = { ...data, status, created_at, bookingCount: 0 }
    // console.log(newData)

    // save job to the database
    axios.post('https://tour-booking-server-five.vercel.app/all-packages', newData)
      .then(res => {
        // console.log(res)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have added a package successfully",
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(err => {
        // console.log(err)
      })
  }
  return (
    <div className='p-24'>
      <Helmet>
        <title>Zahaba| Add Packages</title>
      </Helmet>
      <div className='p-12 text-center space-y-4 mb-10'>
        <h1 className='md:text-5xl text-success divider font-bold'>Please Add Package</h1>
      </div>



      <form onSubmit={handleAddPackage}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <label className='label'>Tour Name</label>
            <input
              type='text'
              name='tour_name'
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
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <label className='label'>Destination</label>
            <input
              type='text'
              name='destination'
              className='input w-full'
              placeholder='destination'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <label className='label'>Departure date</label>
            <input
              type='date'
              name='departure_date'
              className='input w-full'
              placeholder='Departure date'
            />

          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <label className='label'>Departure location</label>
            <input
              type='text'
              name='departure_location'
              className='input w-full'
              placeholder='Departure location'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <label className='label'>duration</label>
            <select defaultValue="Select duration" name='duration' className="select w-full">
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
            />
          </fieldset>

          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <label className='label'>Guide Name</label>
            <input
              type='text'
              name='guide_name'
              className='input w-full'
              placeholder='guide name'
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
              placeholder='guide_contact_no'
            />
          </fieldset>

          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4'>
            <label className='label'>Guide Photo</label>
            <input
              type='text'
              name='photo'
              className='input w-full'
              placeholder='Photo URL'
            />
          </fieldset>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4'>
            <label className='label'>Package details</label>
            <input
              type='textarea'
              name='package_details'
              className='input w-full'
              placeholder='package_details'
            />
          </fieldset>

        </div>


        <input type='submit' className='btn w-full' value='Add Package' />
      </form>
    </div>
  );
};

export default AddPackage;