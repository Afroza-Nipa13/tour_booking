import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/hotels/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
        setMainImage(data.images[0]); // set default main image
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!hotel) {
    return (
      <p className="text-center mt-20 text-gray-600 animate-pulse">
        Loading hotel details...
      </p>
    );
  }
  const handleBooking=()=>{
 Swal.fire({
                  title: "Booking Confirmed! 🎉",
                  text: `Your stay at ${hotel.name} has been successfully booked.`,
                  icon: "success",
                  confirmButtonText: "Awesome!",
                  confirmButtonColor: "#0284c7", // Tailwind sky-600
                  background: "#f0f9ff",
                });
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 text-center"
      >
        {hotel.name}
      </motion.h1>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        {/* Main Image */}
        <div className="relative">
          <img
            src={mainImage}
            alt={hotel.name}
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]"
          />
          <span className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow">
            {hotel.destination} • ⭐ {hotel.rating}
          </span>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {hotel.description}
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              📍 {hotel.location.city}, {hotel.location.country}
            </p>
            <p className="text-xl font-bold text-sky-700">
              ${hotel.price_per_night}
              <span className="text-gray-600 text-base font-normal"> / night</span>
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600 text-sm">
                {hotel.amenities.map((a, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-sky-500">•</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <a
              href={hotel.map_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 underline hover:text-sky-800 transition"
            >
               View on Google Maps
            </a>
            <button
              onClick={() => {handleBooking()}}
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              Book Now
            </button>

          </div>
        </div>
      </motion.div>

      {/* Thumbnail Gallery */}
      {hotel.images.length > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {hotel.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${mainImage === img ? "ring-4 ring-sky-500" : ""
                }`}
            >
              <img
                src={img}
                alt={`hotel ${index}`}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HotelDetails;

