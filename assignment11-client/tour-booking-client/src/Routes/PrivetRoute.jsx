import { use } from 'react'

import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import Loader from '../Pages/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext)

  const location = useLocation()

  if (loading) {
    return <Loader></Loader>
  }

  if (user && user?.email) {
    return children
  }
  return <Navigate state={location.pathname} to='/signin'></Navigate>
}

export default PrivateRoute
