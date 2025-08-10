export const packageCreatedByPromise =(email,accessToken)=>{
    return fetch(`http://localhost:3000/all-packages/bookings?email=${email}`,{
        headers:{
            Authorization :`Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}