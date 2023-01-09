// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'


import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import EcommerceTotalVisits from 'src/views/dashboards/ecommerce/EcommerceTotalVisits'

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
          <Grid item xs={6} sm={3} md={2}>
            <CrmTotalProfit />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <CrmTotalGrowth />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EcommerceTotalVisits />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
