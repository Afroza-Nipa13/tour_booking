import { useEffect, useState } from "react";
import { useParams } from "react-router";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/hotels/${id}`)
      .then((res) => res.json())
      .then((data) => setHotel(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!hotel) {
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{hotel.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-80 object-cover rounded-xl shadow-md"
        />
        <div>
          <p className="text-gray-600 mb-4">{hotel.description}</p>
          <p className="text-gray-700 font-semibold">
            📍 {hotel.location.city}, {hotel.location.country}
          </p>
          <p className="mt-3 text-lg text-blue-600 font-bold">
            ${hotel.price_per_night}/night
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Amenities:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {hotel.amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href={hotel.map_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
