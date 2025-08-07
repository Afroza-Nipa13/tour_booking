import React from 'react';
import { createBrowserRouter } from 'react-router';
import AboutUs from './Components/AboutUs';
import AllPackage from './Components/AllPackage';
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Components/Home';
import PackageDetails from './Components/PackageDetails';
import SignIn from './Shared/SignIn';
import SignUp from './Shared/SignUp';

import Loader from './Pages/Loader';
import TourBooking from './Shared/TourBooking';
import PrivateRoute from './Routes/PrivetRoute';
import MyBookings from './Shared/MyBookings';
import AddPackage from './Shared/AddPakage/AddPackage';
import MyPostedPackages from './Shared/AddPakage/MyPostedPackages';
import UpdatePackages from './Shared/UpdatePackages'
import Allpackages from './Shared/Allpackages/Allpackages'
import ContactUs from './Pages/ContactUs';
import Error from './Pages/Error';

const router=createBrowserRouter([
  { path: '/', 
    errorElement:<Error/>,
    element: <MainLayOut/>,
    
    children:[
      { path:'/',
        element:<Home></Home>
      },
      {
        path:'/signin', element:<SignIn/>
      },
      {
        path:'/signup', element:<SignUp/>
      },
      {
        path:'/addPackage',element: <PrivateRoute>
          <AddPackage></AddPackage>
        </PrivateRoute>
      },
      {
        path:'/all-packages/:id',
        loader:({params})=>fetch(`https://tour-booking-server-five.vercel.app/all-packages/${params.id}`),
        element:<PrivateRoute>
          <PackageDetails></PackageDetails>
        </PrivateRoute>
        
      },
      {
        path:'/all-packages',
        element:<PrivateRoute>
          <Allpackages></Allpackages> 
          </PrivateRoute>

      },
      {
        path:'/package/:id',
        loader: ({params})=>fetch(`https://tour-booking-server-five.vercel.app/package/${params.id}`),
        element:<PrivateRoute>
          <TourBooking></TourBooking>
        </PrivateRoute>
      }
      ,
      {
        path:'/myPostedPackages',
        element:<PrivateRoute>
          <MyPostedPackages></MyPostedPackages>
        </PrivateRoute>
      },
      {
        path:'/updatePackages/:packageId',
        element:<PrivateRoute>
          <UpdatePackages></UpdatePackages>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://tour-booking-server-five.vercel.app/all-packages/${params.packageId}`)
      },
      {
        path:'/all-package',
        element:<AllPackage/>
      },
      { path:'/my-bookings',
        element:<PrivateRoute><MyBookings/> </PrivateRoute>}
    ]
  },
  {
    path: '/about-us', element: <AboutUs/>

  },
  {
    path:'/contact-us', element:<ContactUs/>
  }
])

export default router;