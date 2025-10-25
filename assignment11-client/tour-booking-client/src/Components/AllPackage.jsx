import { motion } from "framer-motion";
import PackageCard from '../Shared/PackageCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import EmptyPage from '../Shared/EmptyPage';

const AllPackage = ({ allPackages }) => {
  const navigate = useNavigate();
  const handleShowAllClick = () => {
    navigate('/all-packages');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-40 h-40  rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-blue-300 rounded-full blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold divider lg:w-4xl mx-auto text-sky-800 mb-10"
        >
          Our <span className="">Hot Packages</span>
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Explore our most popular travel packages — handpicked destinations, unforgettable experiences, and exclusive deals crafted just for you.
        </p>

        {/* Packages Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.5 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-16"
        >
          {allPackages && allPackages.length > 0 ? (
            allPackages.map((tourPack) => (
              <motion.div
                key={tourPack._id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PackageCard tourPack={tourPack} />
              </motion.div>
            ))
          ) : (
            <EmptyPage />
          )}
        </motion.div>

        {/* Show All Button */}
        <motion.button
          onClick={handleShowAllClick}
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(to right, #0284c7, #14b8a6)",
            color: "#fff",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-12 px-8 py-3 text-sky-700 border border-sky-600 font-semibold rounded-full flex items-center gap-2 mx-auto hover:text-white hover:shadow-lg group transition-all duration-300"
        >
          Show All
          <motion.span
            className="text-lg"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <FaArrowRightLong />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default AllPackage;
