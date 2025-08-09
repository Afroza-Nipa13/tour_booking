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
        <div className='md:flex md:flex-raw bg-gray-50 justify-center items-center mx-auto pt-8'>
            <Helmet>
                <title>Zahaba | Sign Up</title>
            </Helmet>
            <div>
                <Lottie animationData={signUp} loop={true} style={{ width: '300px', height: '300px' }} ></Lottie>
            </div>
            <div className='card bg-base-100 w-full md:w-sm shadow-2xl my-12'>

                <div className='card-body'>
                    <h1 className='text-3xl font-bold'> Sign Up  <span className='text-[#0f65bb]'>now </span> !</h1>
                    <p className='text-gray-400 text-sm'>Manage your itineraries and make secure payments in your Zahabar tour account.</p>
                    <form onSubmit={handleSignUp} className='fieldset'>
                        <label className='label'>Name</label>
                        <input type='text' name='name' className='input w-full' placeholder='Name' />

                        <label className='label'>photo</label>
                        <input
                            type='text'
                            name='photo'
                            className='input w-full'
                            placeholder='Photo URL'
                        />
                        <label className='label'>Email</label>
                        <input
                            type='email'
                            name='email'
                            className='input w-full'
                            placeholder='Email'
                        />
                        <label className='label'>Password</label>
                        <input
                            type='password'
                            name='password'
                            className='input w-full'
                            placeholder='Password'
                        />
                        <div>
                            <Link to='/signin' className='link link-hover'>Already have an account?<span className='text-blue-600'>Please sign in</span></Link>
                        </div>
                        <button className='btn bg-[#0f65bb] text-white mt-4'>Sign up</button>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default SignUp;