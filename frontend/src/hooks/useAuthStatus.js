import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStates = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  //get user state from redux (real from backend)
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setCheckingStatus(false)
  }, [user])
  return { loggedIn, checkingStatus }
}
