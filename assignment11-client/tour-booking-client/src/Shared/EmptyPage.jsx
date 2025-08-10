
import { FaBoxOpen } from "react-icons/fa";

const EmptyPage = ({ message = "No packages found" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen py-20 text-center space-y-4">
      <div
        data-aos="zoom-in"
        className="p-6 bg-base-200 rounded-full shadow-lg"
      >
        <FaBoxOpen className="text-sky-500 text-6xl" />
      </div>

      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-2xl font-semibold text-gray-700 dark:text-gray-200"
      >
        {message}
      </h2>

      <p
        data-aos="fade"
        data-aos-delay="500"
        className="text-gray-500 dark:text-gray-400 max-w-sm"
      >
        Looks like there’s nothing here right now. Please check back later or explore other sections.
      </p>
    </div>
  );
};


export default EmptyPage;
