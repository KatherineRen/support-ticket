import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UserAuth } from '../context/AuthContext'

export const useAuthStates = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  //get user state from redux (real from backend)
  const { user } = useSelector((state) => state.auth)

  const { googleUser } = UserAuth()
  useEffect(() => {
    if (user || googleUser) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setCheckingStatus(false)
  }, [user, googleUser])
  return { loggedIn, checkingStatus }
}
