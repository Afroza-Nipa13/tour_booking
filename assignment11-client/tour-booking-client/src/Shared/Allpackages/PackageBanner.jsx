import React from 'react';
import { motion } from "framer-motion"

const PackageBanner = ({packages}) => {
    return (
        <div
        
        className='h-[450px] bg-no-repeat bg-cover bg-center flex justify-center items-center'
        style={{backgroundImage:"url(https://as1.ftcdn.net/v2/jpg/10/13/47/80/1000_F_1013478073_wt8OSBQff8EdMAjZtSI9Ohs1xDCgfrSb.jpg)"}}>
           <motion.div
           whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className='bg-white opacity-80 py-6 px-4 rounded-4xl w-4xl mx-auto'>
            
           <h1 className='text-center text-shadow-2xs font-bold text-5xl mb-9'><span className='text-[#fcba03]'>{packages.length} </span> Packages are ready for you!</h1> 
           <p className='text-2xl text-primary'>From breathtaking natural wonders to vibrant city experiences <br /> — find the perfect trip that <br /> matches your dream destination.</p>
           </motion.div>
        </div>
    );
};

export default PackageBanner;