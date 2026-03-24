'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider } from '../utils/firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function gitHubSignIn() {
    return signInWithPopup(auth, provider)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, gitHubSignIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(AuthContext)
}