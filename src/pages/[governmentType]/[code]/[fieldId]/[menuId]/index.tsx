// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Component Imports
import RechartsTimeChart from 'src/components/recharts/RechartsTimeChart'
import RechartsPyramidChart from 'src/components/recharts/RechartsPyramidChart'
import { CardContents } from 'src/types/common'
import useSWR, { Fetcher } from 'swr'

const Recharts = () => {
  // ** useRouter
  const router = useRouter()
  const { menuId, governmentType } = router.query

  // server apiのurl
  const url = router.query
    ? `/api/cards?menuId=${menuId}&governmentType=${governmentType}`
    : null

  // ** useSWR
  const fetcher: Fetcher<CardContents[]> = (url: string) =>
    fetch(url).then(res => res.json())
  const { data: cards } = useSWR(url, fetcher)

  return (
    <RechartsWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          {cards &&
            cards.map(c => (
              <Grid item xs={12} md={6} key={c.cardId}>
                {c.chartComponent === 'ComposedChart' ? (
                  <RechartsTimeChart card={c} />
                ) : (
                  <RechartsPyramidChart card={c} />
                )}
              </Grid>
            ))}
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
