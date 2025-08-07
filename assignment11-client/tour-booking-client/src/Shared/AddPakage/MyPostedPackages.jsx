import React, { Suspense } from 'react';
import useAuth from '../../Components/Hooks/useAuth';
import MyPostedPackageList from './MyPostedPackageList';
import usePackageApi from '../../Components/Api/usePackageApi';
import Loader from '../../Pages/Loader';


const MyPostedPackages = () => {
    const {user} =useAuth();
    const {packageCreatedByPromise}= usePackageApi()
    
    return (
        <div>
           
           <Suspense fallback={<Loader></Loader>}>
             <MyPostedPackageList
            packageCreatedByPromise={packageCreatedByPromise(user.email)}
            ></MyPostedPackageList>
           </Suspense>
            
        </div>
    );
};

export default MyPostedPackages;