import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const HotelsSection = () => {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/hotels")
            .then((res) => res.json())
            .then((data) => setHotels(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 divider"
                >
                    Stay in Comfort & Style
                </motion.h2>        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Discover hand-picked hotels offering top-notch comfort, stunning views,
                    and unforgettable experiences — all tailored for your perfect getaway.
                </p>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {hotels.map((hotel) => (
                        <SwiperSlide key={hotel._id}>
                            <div
                                onClick={() => navigate(`/hotel/${hotel._id}`)}
                                className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
                            >
                                {/* Hotel Image */}
                                <img
                                    src={hotel.images[0]}
                                    alt={hotel.name}
                                    className="w-full h-[420px] object-cover group-hover:brightness-110 transition-all duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />

                                {/* Hotel Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HotelsSection;
