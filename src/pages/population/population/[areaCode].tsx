// ** React Imports
import { useRouter } from 'next/router'

// ** Third Party Imports
import useSWR from 'swr'

// ** Demo Components Imports
import Population from 'src/views/population/PopulationTab'

const menuId = 'population'

const DashboardTab = () => {
  // ** useRouter
  const { areaCode } = useRouter().query

  // ** useSWR
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data: area } = useSWR(
    areaCode ? `/api/areas/?areaCode=${areaCode}` : '28000',
    fetcher
  )

  return <Population tab={menuId} area={area} />
}

export default DashboardTab
