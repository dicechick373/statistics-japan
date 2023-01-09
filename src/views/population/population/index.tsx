// ** Next Import
import dynamic from 'next/dynamic'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Import
const TotalPopulation = dynamic(
  () => import('src/views/population/population/TotalPopulation'),
  { ssr: false }
)

const PopulationPyramid = dynamic(
  () => import('src/views/population/population/PopulationPyramid'),
  { ssr: false }
)

const Recharts = () => {
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
          <Grid item xs={12} sm={12} md={6}>
            <TotalPopulation />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PopulationPyramid />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
