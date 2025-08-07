import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const usePackageApi = () => {
    const axiosSecure = useAxiosSecure();
    
    const packageCreatedByPromise=email=> {
        return axiosSecure.get(`/all-packages/bookings?email=${email}`).then(res=>res.data)

    }
    return {packageCreatedByPromise};
};

export default usePackageApi;