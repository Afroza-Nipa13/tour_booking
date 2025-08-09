import { Navigate, useLocation } from "react-router";
import useAuth from "../Components/Hooks/useAuth";
import Loader from "../Pages/Loader";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
