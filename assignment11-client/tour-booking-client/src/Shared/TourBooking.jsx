import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useAuth from '../Components/Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const TourBooking = () => {
    const { id: packageId } = useParams()
    const data = useLoaderData()
    console.log(data)
    const { user } = useAuth();
    
    const [bookingDate, setBookingDate] = useState("")
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
    
        // const formData = new FormData(form);
        // const data = Object.fromEntries(formData.entries())
        // console.log(data)
        const tourist = {

            packageId,
            tourist_name: user.displayName,
            tourist_email: user.email,
            booking_date: bookingDate,
            price:data.price,
            note: form.note.value
        }
        // console.log(tourist)
        tourist.status ="pending"


        // save to the database
        axios.post('https://tour-booking-server-five.vercel.app/bookings', tourist).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your booking has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
            .catch(err => {
                // console.log(err)
            })

    }

    useEffect(() => {
        const today = new Date()
        const formattedDate = today.toISOString().split('T')[0]

        setBookingDate(formattedDate)

    }, [])
    return (
        <div className='mt-22 px-5'>
            <Helmet>
                <title>Zahaba| Bookings</title>
            </Helmet>
            
            <div className='mx-auto w-full lg:flex justify-center gap-5 px-4'>
                <figure className='h-[90vh] pt-5'>
                    <img 
                    className='w-full h-full rounded-2xl'
                    src="https://img.freepik.com/free-photo/christmas-travel-concept-with-laptop_23-2149573080.jpg" alt="" />
                </figure>
                <form
                    onSubmit={handleBooking}
                    className='mx-auto lg:w-[50%] items-center text-center'>
                    <fieldset className="fieldset mx-auto  bg-sky-100 border-sky-300 rounded-box border p-4">
                        <legend className="fieldset-legend text-3xl">Page details</legend>

                        <label className="label">Tour Package Name</label>
                        <input type="text" defaultValue={data.tour_name}  className="input w-full" placeholder="My awesome page" readOnly />
                        {/* Price */}
                        <label className="label">Price (not editable)</label>
                        <input type="number" defaultValue={data.price} className="input w-full" placeholder="price" readOnly />
                        {/* Buyer Name */}
                        <label className="label">Buyer Name</label>
                        <input type="text" name='name' defaultValue={user.displayName} className="input w-full" placeholder="Name" readOnly />

                        {/* buyer email */}
                        <label className="label">Buyer Email</label>
                        <input type="email" name='email' defaultValue={user.email} className="input w-full" placeholder="Name" readOnly />
                        <label className="label">Booking Date</label>
                        <input
                            type='date'
                            name='booking_date'

                            value={bookingDate}
                            readOnly
                            className='input w-full'
                        />

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Spacial Note</legend>
                            <textarea className="textarea h-20 w-full" name='note' placeholder="Write something about your tour plane.."></textarea>
                            <div className="label">Optional</div>
                        </fieldset>
                    </fieldset>
                    <button
                        type='submit'
                        className='btn btn-info my-5 '
                    >Click to confirm</button>
                </form>
            </div>
        </div>
    );
};

export default TourBooking;