import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center mx-auto min-h-screen'>
            <span className="loading loading-ring text-info loading-xl"></span>
        </div>
    );
};

export default Loader;