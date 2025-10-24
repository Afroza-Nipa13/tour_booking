export const myBookingsPromise = (email,accessToken) =>{
        return fetch(`https://tour-booking-server-five.vercel.app/bookings?email=${email}`,{
                headers:{
                        authorization: `Bearer ${accessToken}`
                }
        }).then(res=> res.json())
}


// confirm Booking api

export const confirmBooking =async(id, accessToken)=>{
        const respons = await fetch(`https://tour-booking-server-five.vercel.app/bookings/${id}`,{
                method:"PATCH",
                headers:{
                        "content-type": "application/json",
                        authorization: `Bearer ${accessToken}`
                },
                body:JSON.stringify({status : "completed"})
        })
        const data = await respons.json()
        return data;
}