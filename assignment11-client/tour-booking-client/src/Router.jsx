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
import Blogs from './Components/Blogs/Blogs';
import TermsAndCondition from './Pages/TermsAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CookiePolicy from './Pages/CookiePolicy';
import TourPromotion from './Shared/TourPromotion';
import GalleryPage from './Shared/GalleryPage';
// http://localhost:3000/
// http://localhost:3000
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
        loader:({params})=>fetch(`http://localhost:3000/all-packages/${params.id}`),
        element:<PrivateRoute>
          <PackageDetails></PackageDetails>
        </PrivateRoute>
        
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/all-packages',
        element:
          <Allpackages></Allpackages> 
          

      },
      {
        path:'/terms&condition',
        element:<TermsAndCondition/>
      },
      {
        path:'/privecyPolicy',
        element:<PrivacyPolicy/>
      },
      {
        path: '/gallery', 
        element: <GalleryPage/>
      },
      {
        path: '/gallery/:id', 
        element: <GalleryPage/>
      },
      {
        path:'/cookiePolicy',
        element:<CookiePolicy/> 
      },
      {
        path:'/tourPromotion',
        element:<TourPromotion/>
      },
      {
        path:'/package/:id',
        loader: ({params})=>fetch(`http://localhost:3000/package/${params.id}`).then(res=>res.json()),
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
        loader:({params})=>fetch(`http://localhost:3000/all-packages/${params.packageId}`)
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