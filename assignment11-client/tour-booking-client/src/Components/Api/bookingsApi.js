export const myBookingsPromise = (email,accessToken) =>{
        return fetch(`http://localhost:3000/bookings?email=${email}`,{
                headers:{
                        authorization: `Bearer ${accessToken}`
                }
        }).then(res=> res.json())
}


// confirm Booking api

export const confirmBooking =async(id, accessToken)=>{
        const respons = await fetch(`http://localhost:3000/bookings/${id}`,{
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