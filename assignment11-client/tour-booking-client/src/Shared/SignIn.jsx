

import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Shared/socialLogin';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Lottie from 'lottie-react';
import signin from '../assets/lotties/signup.json'
import { Helmet } from 'react-helmet-async';
import useAuth from '../Components/Hooks/useAuth';
import Loader from '../Pages/Loader';
import { useEffect } from 'react';

const SignIn = () => {
  const { sighInUser, user, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) return <Loader />;

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
          
        }

      })
      .catch(err => {
        console.log(err)
        toast.error("Failed to sign in!");

      })

  }
  return (
    <div className='min-h-screen md:flex md:flex-raw bg-base-200  justify-center items-center mx-auto pt-8'>
      <Helmet>
        <title>Zahaba | Sign In</title>
      </Helmet>
      <div className=''>
        <Lottie animationData={signin} loop={true} style={{ width: "300px", height: "300px" }}></Lottie>
      </div>
      <div className='card bg-base-100 w-full md:w-sm shadow-2xl my-12'>
        <div className='card w-full max-w-sm rounded-2xl shadow-xl mt-8'>
          <div className='card-body bg-base-100 overlay 80% p-8 rounded-2xl'>
          <h1 className='text-3xl font-bold'> Sign In  <span className='text-[#0f65bb]'>now </span> !</h1>

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
            <button type='submit' className='btn btn-neutral mt-4 bg-[#0f65bb] text-base-100 border-none'>Sign in</button>
          </form>
          <SocialLogin></SocialLogin>
        </div>
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