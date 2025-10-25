import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import HotelCard from "./HotelCard";

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
                            <HotelCard hotel={hotel} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default HotelsSection;
