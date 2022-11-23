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
import RechartsTimeChart from 'src/components/recharts/RechartsTimeChart'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { useLayoutEffect, useState } from 'react'
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

      console.log(router.query)
      console.log({menuId,governmentType})
      const response = await fetch(`/api/cards?menuId=${menuId}&governmentType=${governmentType}`)
      const data = await response.json()
      console.log(data)
      setCards(data)
    }
  }

  useLayoutEffect(() => {
    fetchCard()
  }, [router.query])

  // console.log(cards)

  return (
    <RechartsWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          {cards && cards.map((c) => (
            <Grid item xs={12} md={6} key={c.cardId} >
              <RechartsTimeChart direction={settings.direction} card={c} />
            </Grid>
          ))}
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
