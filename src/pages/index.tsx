// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

/**
 *  Set Home URL
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
