import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
// http://localhost:3000
const axiosInstance = axios.create({
    baseURL: 'https://tour-booking-server-five.vercel.app'
})

const useAxiosSecure = () => {
    const {user}=useAuth();
    
    
    axiosInstance.interceptors.request.use(config=>{
        config.headers.Authorization =`Bearer ${user?.accessToken}`
        return config;
    })

    return axiosInstance;
};

export default useAxiosSecure;