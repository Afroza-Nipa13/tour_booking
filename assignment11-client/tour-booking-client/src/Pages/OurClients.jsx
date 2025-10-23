import React from 'react';
import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

const OurClients = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <Helmet>
                <title>Zahaba | Our Clients</title>
            </Helmet>
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <motion.h2
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 divider"
                                        >
          our happy clients
        </motion.h2>
        <p className="text-base md:text-lg">
          What Our Happy Clients Are Saying
        </p>
      </div>
      <div className="">
   <Marquee play={true}
   pauseOnHover>
         <div className='mx-10 my-10 w-md'>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://www.coffee-shop-catering.de/files/bellagio/images/Inhaber%20LCC%20Sascha%20Lauble.jpg"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Tanvir Hasan
          </h5>
          <p className="text-gray-700 italic">
            “Unforgettable experience! From booking to return, everything was perfect. Highly recommended for family tours.”
          </p>
        </div>
         <div className='mx-10 my-10 w-md'>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://img.freepik.com/premium-photo/self-quarantine-social-distancine-leisure-lifestyle-concept-close-up-handsome-cheerful-asian-man-blue-t-shirt-satisfied-with-new-haircut-after-visiting-barbershop_1258-60307.jpg "
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Hamza Yusuf
          </h5>
          <p className="text-gray-700">
            “The tour was so well organized! Everything was on time, and we felt completely safe and relaxed throughout.”
          </p>
        </div>
         <div className='mx-10 my-10 w-md'>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://media.istockphoto.com/id/1440945691/photo/smiling-middle-aged-man-enjoying-relaxing-time-at-home.jpg?s=612x612&w=0&k=20&c=-sCEe9KZEpc_yJldbhLVKj7FwpaxfaXBJfM59LR6_mI="
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Redwan Haq
          </h5>
          <p className="text-gray-700 italic">
            “My children had a great time! The destinations were amazing, and customer support was always available.”
          </p>
        </div>
         <div className='mx-10 my-10 w-md'>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://media.istockphoto.com/id/981749414/photo/positive-and-professional-everything-you-want-in-an-entrepreneur.jpg?s=612x612&w=0&k=20&c=Tp04T5oHLnKtmosfilVaBRstMN1ARc1li8bQN8fx5RA="
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Mahbubur Rohman
          </h5>
          <p className="text-gray-700 italic">
           “Loved the attention to detail. Tour guides were helpful and friendly. Great value for the money!”
          </p>
        </div>
        
        
        
        
   </Marquee>
      </div>
    </div>
    );
};

export default OurClients;