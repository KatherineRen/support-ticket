import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStates } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStates()
  if (checkingStatus) {
    return <Spinner />
  }
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
