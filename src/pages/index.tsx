// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
// import { useAuth } from 'src/hooks/useAuth'

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = () => {
  return '/charts/recharts'
}

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const homeRoute = getHomeRoute()
    router.replace(homeRoute)
  }, [])

  return <Spinner />
}

export default Home
