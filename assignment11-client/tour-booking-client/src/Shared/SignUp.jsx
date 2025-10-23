import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import signUp from '../assets/lotties/signup.json'
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const { createUser, updateUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/'
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const { name, email, photo, password } = Object.fromEntries(formData.entries())
        console.log({ name, email, photo, password })
        createUser(email, password).then(result => {
            updateUser({ displayName: name, photoURL: photo }).then(() => {
                setUser({ ...result?.user, displayName: name, photoURL: photo })
            })
            Swal.fire({
                icon: 'success',
                title: 'Your account is created.',
                showConfirmButton: false,
                timer: 1500,
            })
            // console.log(result)

            updateUser
            navigate(from)
        }).catch(error => {
            // console.log(error)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
            });
        })

    }
    return (
        <div className='md:flex md:flex-raw  justify-center items-center mx-auto pt-8'>
            <Helmet>
                <title>Zahaba | Sign Up</title>
            </Helmet>
            <div>
                <Lottie animationData={signUp} loop={true} style={{ width: '300px', height: '300px' }} ></Lottie>
            </div>
            <div className='card bg-base-100 w-full md:w-sm shadow-2xl my-12'>

        <div className='card w-full max-w-sm rounded-2xl shadow-xl mt-8'>
        <div className='card-body bg-white overlay 80% p-8 rounded-2xl'>
          <h1 className='text-3xl font-bold text-center'>
            Sign Up <span className='text-[#0f65bb]'>now</span>!
          </h1>
          <p className='text-gray-400 text-sm text-center mb-4'>
            Manage your itineraries and make secure payments in your Zahabar tour account.
          </p>
          
          <form onSubmit={handleSignUp} className='fieldset space-y-4'>
            <label className='label block text-gray-700 font-semibold'>Name</label>
            <input type='text' name='name' className='input w-full border border-gray-300 p-2 rounded' placeholder='Name' />

            <label className='label block text-gray-700 font-semibold'>Photo</label>
            <input
              type='text'
              name='photo'
              className='input w-full border border-gray-300 p-2 rounded'
              placeholder='Photo URL'
            />
            <label className='label block text-gray-700 font-semibold'>Email</label>
            <input
              type='email'
              name='email'
              className='input w-full border border-gray-300 p-2 rounded'
              placeholder='Email'
            />
            <label className='label block text-gray-700 font-semibold'>Password</label>
            <input
              type='password'
              name='password'
              className='input w-full border border-gray-300 p-2 rounded'
              placeholder='Password'
            />
            <div className="text-sm mt-2">
              <Link to='/signin' className='link link-hover'>
                Already have an account? <span className='text-blue-600'>Please sign in</span>
              </Link>
            </div>
            <button className='btn w-full bg-[#0f65bb] text-white p-3 rounded-lg font-bold hover:bg-[#0c5a9e] transition-colors mt-4'>
              Sign up
            </button>
          </form>
        </div>
      </div>

            </div>
        </div>

    );
};

export default SignUp;