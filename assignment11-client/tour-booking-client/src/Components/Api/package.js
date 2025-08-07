export const packageCreatedByPromise =(email,accessToken)=>{
    return fetch(`https://tour-booking-server-five.vercel.app/all-packages/bookings?email=${email}`,{
        headers:{
            Authorization :`Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}