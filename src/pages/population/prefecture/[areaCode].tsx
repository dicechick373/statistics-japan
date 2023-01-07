// ** Next Import
import dynamic from 'next/dynamic'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
const RechartsBarChart = dynamic(
  () => import('src/views/charts/recharts/RechartsBarChart'),
  { ssr: false }
)
const RechartsPieChart = dynamic(
  () => import('src/views/charts/recharts/RechartsPieChart'),
  { ssr: false }
)

const TotalPopulation = dynamic(
  () => import('src/views/population/TotalPopulation'),
  { ssr: false }
)

const PopulationPyramid = dynamic(
  () => import('src/views/population/PopulationPyramid'),
  { ssr: false }
)

const Marriage = dynamic(() => import('src/views/population/Marriage'), {
  ssr: false
})

import InfoTotalPopulation from 'src/views/population/InfoTotalPopulation'

import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import EcommerceTotalVisits from 'src/views/dashboards/ecommerce/EcommerceTotalVisits'

const RechartsRadarChart = dynamic(
  () => import('src/views/charts/recharts/RechartsRadarChart'),
  { ssr: false }
)
const RechartsScatterChart = dynamic(
  () => import('src/views/charts/recharts/RechartsScatterChart'),
  { ssr: false }
)

const Recharts = () => {
  // ** Hooks
  const { settings } = useSettings()

  return (
    <RechartsWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6} className='match-height'>
          <PageHeader
            title={
              <Typography variant='h5'>
                <Link
                  href='https://github.com/recharts/recharts'
                  target='_blank'
                >
                  Recharts
                </Link>
              </Typography>
            }
            subtitle={
              <Typography variant='body2'>
                Redefined chart library built with React and D3
              </Typography>
            }
          />
          <Grid item xs={6} sm={3} md={2}>
            <CrmTotalProfit />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CrmTotalGrowth />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EcommerceTotalVisits />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoTotalPopulation />
          </Grid>
          <Grid item xs={12} md={8}>
            <TotalPopulation />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PopulationPyramid />
          </Grid>
          <Grid item xs={12} md={6}>
            <Marriage />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsPieChart />
          </Grid>
          <Grid item xs={12}>
            <RechartsScatterChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsBarChart direction={settings.direction} />
          </Grid>
          Ï
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
