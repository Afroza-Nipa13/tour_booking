import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (hovering && hotel.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
      }, 1500); // change every 1.5 seconds
    }
    return () => clearInterval(interval);
  }, [hovering, hotel.images]);

  return (
    <div
      onClick={() => navigate(`/hotel/${hotel._id}`)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
    >
      {/* Image */}
      <img
        src={hotel.images[currentImageIndex]}
        alt={hotel.name}
        className="w-full h-[420px] object-cover transition-all duration-700 ease-in-out group-hover:brightness-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Hotel Info */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-left text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-2xl font-bold mb-1">{hotel.name}</h3>
        <p className="text-sm text-gray-200 mb-3">
          {hotel.destination} • ⭐ {hotel.rating}
        </p>
        <p className="text-gray-300 line-clamp-2 text-sm mb-3">
          {hotel.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">
            ${hotel.price_per_night}/night
          </span>
          <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-sm hover:bg-white/30 transition-all duration-200">
            View Details
          </button>
        </div>
      </div>

      {/* Featured Badge */}
      {hotel.featured && (
        <span className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-semibold text-xs px-3 py-1 rounded-full shadow">
          Featured
        </span>
      )}
    </div>
  );
};

export default HotelCard;

