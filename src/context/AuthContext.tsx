// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Types
import { AuthValuesType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  loading: true,
  setLoading: () => Boolean,
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  useEffect(() => {
    setLoading(false)
  }, [])

  const values = {
    loading,
    setLoading,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
