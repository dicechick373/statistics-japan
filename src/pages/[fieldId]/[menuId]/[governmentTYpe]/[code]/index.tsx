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
import RechartsBarChart from 'src/views/charts/recharts/RechartsBarChart'
import RechartsPieChart from 'src/views/charts/recharts/RechartsPieChart'
import RechartsLineChart from 'src/views/charts/recharts/RechartsLineChart'
import RechartsAreaChart from 'src/views/charts/recharts/RechartsAreaChart'
import RechartsRadarChart from 'src/views/charts/recharts/RechartsRadarChart'
import RechartsScatterChart from 'src/views/charts/recharts/RechartsScatterChart'

import RechartsTimeChart from 'src/components/recharts/RechartsTimeChart'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const Recharts = () => {
  // ** Hooks
  const { settings } = useSettings()

  const router = useRouter();
  const [cards, setCards] = useState()

  const fetchCard = async () => {
    if (router.isReady) {
      const menuId = router.query.menuId
      const governmentType = router.query.governmentType

      const response = await fetch(`/api/cards?menuId=${menuId}&governmentType=${governmentType}`)
      const data = await response.json()
      setCards(data)
    }
  }

  useEffect(() => {
    fetchCard()
  }, [router.query])


  return (
    <RechartsWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <PageHeader
            title={
              <Typography variant='h5'>
                <Link href='https://github.com/recharts/recharts' target='_blank'>
                  Recharts
                </Link>
              </Typography>
            }
            subtitle={<Typography variant='body2'>Redefined chart library built with React and D3</Typography>}
          />
          {cards && cards.map((c) => (
            <Grid item xs={12} md={6} key={c.cardId} >
              <RechartsTimeChart direction={settings.direction} cardId={c.cardId} />
            </Grid>
          ))}

          <Grid item xs={12} md={6}>
            <RechartsLineChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsAreaChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsScatterChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsBarChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsRadarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsPieChart />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
