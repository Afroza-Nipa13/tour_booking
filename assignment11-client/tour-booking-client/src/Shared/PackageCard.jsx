import React, { useState, useEffect } from 'react';
import { FaLocationArrow, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import useWishlist from '../Components/Api/wishList';
import useAuth from '../Components/Hooks/useAuth';

const PackageCard = ({ tourPack }) => {
  const { _id, tour_name, duration, departure_date, image, destination, price } = tourPack;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { addToWishlist, removeFromWishlist, checkWishlist } = useWishlist();
  console.log(user)

  // Check if package is in wishlist on component mount
  useEffect(() => {
    if (user) {
      checkWishlistStatus();
    }
  }, [_id, user]);

  const checkWishlistStatus = async () => {
    try {
      const response = await checkWishlist(_id);
      setIsInWishlist(response.isInWishlist);
    } catch (error) {
      console.error('Error checking wishlist status:', error);
      setIsInWishlist(false);
    }
  };

  const handleWishlistToggle = async () => {
    if (!user) {
      alert('Please login to add to wishlist');
      return;
    }

    if (isLoading) return;
    
    setIsLoading(true);
    try {
      if (isInWishlist) {
        // Remove from wishlist
        await removeFromWishlist(_id);
        setIsInWishlist(false);
      } else {
        // Add to wishlist
        const wishlistData = {
          packageId: _id,
          tour_name,
          duration,
          departure_date,
          image,
          destination: destination || 'Unknown',
          price: price || 0
        };
        await addToWishlist(wishlistData);
        setIsInWishlist(true);
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      
      // Show specific error messages
      if (error.response?.status === 401) {
        alert('Authentication failed. Please login again.');
      } else if (error.response?.status === 400) {
        alert('Package is already in your wishlist.');
      } else {
        alert('Failed to update wishlist. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.00, y: -5 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className="relative rounded-md overflow-hidden shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-[260px] overflow-hidden">
        <motion.img
          src={image}
          alt={tour_name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWishlistToggle}
          disabled={isLoading || !user}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg ${
            isInWishlist 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-gray-600 hover:bg-white'
          } transition-all duration-300 ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
          title={!user ? 'Login to add to wishlist' : isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            />
          ) : isInWishlist ? (
            <FaHeart className="text-sm" />
          ) : (
            <FaRegHeart className="text-sm" />
          )}
        </motion.button>

        {/* Title Over Image */}
        <div className="absolute bottom-4 left-5 text-left">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            {tour_name}
          </h2>
          {destination && (
            <p className="text-white/90 text-sm mt-1">{destination}</p>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 text-start">
        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-500">
            Duration: <span className="font-semibold text-sky-700">{duration}</span>
          </p>
          <p className="text-sm text-gray-500">
            Departure: <span className="font-semibold text-sky-700">{departure_date}</span>
          </p>
          {price && (
            <p className="text-sm text-gray-500">
              Price: <span className="font-semibold text-sky-700">${price}</span>
            </p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {isInWishlist && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 font-medium"
              >
                In Wishlist
              </motion.span>
            )}
          </div>

          <Link to={`/all-packages/${_id}`}>
            <motion.button
              whileHover={{
                background: 'linear-gradient(to right, #0284c7, #14b8a6)',
                color: '#fff',
                x: 3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-2 text-sky-700 border border-sky-500 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition-all duration-300"
            >
              View Details
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <FaLocationArrow />
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-3xl border border-transparent pointer-events-none"
        whileHover={{
          boxShadow: '0 0 25px rgba(14,165,233,0.35)',
        }}
      />
    </motion.div>
  );
};

export default PackageCard;