import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { UserAuth } from '../context/AuthContext'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { googleUser, googleLogOut } = UserAuth()
  if (googleUser) {
    localStorage.setItem('user', JSON.stringify(googleUser))
  }

  const onLogout = async () => {
    if (user) {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }
    if (googleUser) {
      try {
        await googleLogOut()
        dispatch(reset())
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>
      <ul>
        {user || googleUser ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
