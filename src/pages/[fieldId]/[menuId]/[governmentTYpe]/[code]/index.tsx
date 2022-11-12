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

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const Recharts = () => {
  // ** Hooks
  const { settings } = useSettings()

  const router = useRouter();

  const [menuId, setMenuId] = useState<string>()
  const [cards, setCards] = useState()

  useEffect(() => {
    if (router.asPath !== router.route) {
      setMenuId(router.query.menuId);
    }
  }, [router]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(`/api/cards?menuId=${menuId}`)
      const data = await response.json()
      setCards(data)
    }

    if (menuId) { fetchCards() }
  }, [menuId])

  console.log(cards)

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
          {/* {cards.map((option) => (
            <Grid item xs={12} md={6} key={option.cardId}>
              <RechartsLineChart direction={settings.direction} />
            </Grid>
          ))} */}
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
