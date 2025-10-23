import { motion } from "framer-motion";
import PackageCard from '../Shared/PackageCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import EmptyPage from '../Shared/EmptyPage';

// const AllPackage = ({ allPackages }) => {
//   const [packages, setPackages] = useState(allPackages || []);

//   useEffect(() => {
//     if (!allPackages) {
//       fetch('/api/packages')
//         .then(res => res.json())
//         .then(data => setPackages(data));
//     }
//   }, [allPackages]);

//   const sixPackages = packages.slice(0, 6);

//   return (
//     <div>
//       {sixPackages.map(pkg => (
//         <PackageCard key={pkg._id} tourPack={pkg} />
//       ))}
//     </div>
//   );
// };

const AllPackage = ({ allPackages }) => {
    const sixPackages = allPackages;
    // console.log(sixPackages)

    const navigate = useNavigate()
    const handleShowAllClick = () => {
        navigate('/all-packages')
    }
    return (
        <div className='items-center text-center py-20'>
            <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-5xl font-bold text-sky-800 mb-8 divider"
                                >Our Hot Packages</motion.h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                {sixPackages && sixPackages.length > 0 ? (
                    sixPackages.map(tourPack => (
                        <PackageCard tourPack={tourPack} key={tourPack._id} />
                    ))
                ) : (
                   <EmptyPage/>
                )}
            </div>

            <button
                onClick={
                    handleShowAllClick
                }
                className='btn btn-outline text-sky-600 hover:bg-sky-600 hover:text-white '> Show All<FaArrowRightLong /></button>


        </div>
    );
};

export default AllPackage;