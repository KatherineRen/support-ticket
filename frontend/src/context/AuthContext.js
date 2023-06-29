import { useContext, createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [googleUser, setGoogleUser] = useState()

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const googleLogOut = () => {
    signOut(auth)
    setGoogleUser()
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setGoogleUser({
          _id: currentUser.uid,
          token: currentUser.accessToken,
          email: currentUser.email,
          password: 'noPassword',
          name: currentUser.displayName,
        })

        dispatch(
          login({
            _id: currentUser.uid,
            token: currentUser.accessToken,
            email: currentUser.email,
            password: 'noPassword',
            name: currentUser.displayName,
          })
        )
      }
    })
    return () => {
      unsubcribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ googleSignIn, googleLogOut, googleUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
