import React, { Suspense } from 'react';
import BookingList from './BookingList';
import useAuth from '../Components/Hooks/useAuth';
import MyBookingState from './MyBookingState';
import { myBookingsPromise } from '../Components/Api/bookingsApi';
import Loader from '../Pages/Loader';



const MyBookings = () => {
 const {user}=useAuth() 
//  console.log(user.email)  
    return (
        <div>
           
            <div className='mx-auto items-center text-center'>
                <MyBookingState></MyBookingState>


                <Suspense fallback={<Loader></Loader>}>
                    <BookingList
                    myBookingsPromise={myBookingsPromise(user.email,user.accessToken)}></BookingList>
                </Suspense>

            </div>
        </div>
    );
};

export default MyBookings;