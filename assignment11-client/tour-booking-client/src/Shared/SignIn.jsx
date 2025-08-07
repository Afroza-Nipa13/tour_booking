import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Shared/socialLogin';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Lottie from 'lottie-react';
import signin from '../assets/lotties/signin.json'
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
  const { sighInUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form || '/'

  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    sighInUser(email, password)
      .then(result => {
        if (result.user) {


          toast.error("Signed in successfully!")
          navigate(from, { replace: true })
        }

      })
      .catch(err => {
        // console.log(err)
        toast.error("Failed to sign in!");

      })

  }
  return (
    <div className='md:flex md:flex-raw justify-center gap-5 items-center mx-auto'>
      <Helmet>
        <title>Zahaba | Sign In</title>
      </Helmet>
      <div className='my-12'>
        <Lottie animationData={signin} loop={true} style={{ width: "300px", height: "300px" }}></Lottie>
      </div>
      <div className='card bg-base-100 w-full md:w-sm shadow-2xl my-12'>
        <div className='card-body'>
          <h1 className='text-3xl font-bold'> Sign In  <span className='text-[#8cdb81]'>now </span> !</h1>
          <p className='text-gray-400 text-sm'>Manage your itineraries and make secure payments in your Zahabar tour account.</p>
          <form onSubmit={handleSignIn} className='fieldset'>
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
              <Link to='/signup' className='link link-hover'>New to our page? <span className='text-red-500'>Sign Up now. </span></Link>
            </div>
            <button type='submit' className='btn btn-neutral mt-4 bg-[#8cdb81] text-base-100 border-none'>Sign in</button>
          </form>
          <SocialLogin from={from}></SocialLogin>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default SignIn;