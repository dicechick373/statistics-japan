// ** React Imports
import { useRouter } from 'next/router'

// ** Third Party Imports
import useSWR from 'swr'

// ** Demo Components Imports
import PopulationTab from 'src/views/population/PopulationTab'

const DashboardTab = () => {
  // ** useRouter
  const { areaCode } = useRouter().query

  // ** useSWR
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data: area } = useSWR(
    areaCode ? `/api/areas/?areaCode=${areaCode}` : '28000',
    fetcher
  )


  return area ? <PopulationTab tab='dashboard' area={area} /> : <div />
}

export default DashboardTab
