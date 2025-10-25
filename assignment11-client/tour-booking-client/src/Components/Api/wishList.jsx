import useAxiosSecure from "../Hooks/useAxiosSecure";



const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    
    const addToWishlist = (packageData) => {
        return axiosSecure.post('/wishlist', packageData).then(res => res.data);
    }

    const removeFromWishlist = (packageId) => {
        return axiosSecure.delete(`/wishlist/${packageId}`).then(res => res.data);
    }

    const checkWishlist = (packageId) => {
        return axiosSecure.get(`/wishlist/check/${packageId}`).then(res => res.data);
    }

    const getWishlist = () => {
        return axiosSecure.get('/wishlist').then(res => res.data);
    }

    const getWishlistCount = () => {
        return axiosSecure.get('/wishlist/count').then(res => res.data);
    }

    const testAuth = () => {
        return axiosSecure.get('/debug/auth-test').then(res => res.data);
    }

    return {
        addToWishlist,
        removeFromWishlist,
        checkWishlist,
        getWishlist,
        getWishlistCount,
        testAuth
    };
};

export default useWishlist;

  

