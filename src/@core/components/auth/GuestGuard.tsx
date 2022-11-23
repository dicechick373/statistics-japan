// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
// import { useAuth } from 'src/hooks/useAuth'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (window.localStorage.getItem('userData')) {
      router.replace('/')
    }
  }, [router.route])


  return <>{children}</>
}

export default GuestGuard
