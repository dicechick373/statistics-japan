// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SelectCategories from '../SelectCategories'

interface Props {
  direction: 'ltr' | 'rtl'
}

const CustomTooltip = (props: TooltipProps<any, any>) => {
  // ** Props
  const { active, payload } = props

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <span>{`${payload[0].value}%`}</span>
      </div>
    )
  }

  return null
}

const RechartsTimeChart = ({ direction, card }: Props) => {

  /*
  ** useRouter
  */
  const router = useRouter();

  /*
  ** state
  */
  const [test, setTest] = useState()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const fetchData = async () => {
    if (router.isReady) {
      const params = {
        cardId: card.cardId,
        governmentType: router.query.governmentType,
        code: router.query.code,
      }
      const urlSearchParam = new URLSearchParams(params).toString();
      const response = await fetch(`/api/data?${urlSearchParam}`)
      const data = await response.json()
      setTest(data)
    }
  }

  useLayoutEffect(() => {
    fetchData()
  }, [router.query])

  const categories = card.categories

  return (
    <Card>
      <CardHeader
        title='Balance'
        titleTypographyProps={{ variant: 'h6' }}
        subheader='Commercial networks & enterprises'
        subheaderTypographyProps={{ variant: 'caption', sx: { color: 'text.disabled' } }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h6' sx={{ mr: 5 }}>
              $221,267
            </Typography>
            <CustomChip
              skin='light'
              color='success'
              sx={{ fontWeight: 500, borderRadius: 1, fontSize: '0.875rem' }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowUp sx={{ fontSize: '1rem', mr: 1 }} />
                  <span>22%</span>
                </Box>
              }
            />
          </Box>

        }
      />

      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <SelectCategories categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box sx={{ height: 350 }}>

              <ResponsiveContainer>
                <LineChart height={350} data={test} style={{ direction }} margin={{ left: -20 }}>
                  <CartesianGrid />
                  <XAxis dataKey='name' reversed={direction === 'rtl'} />
                  <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
                  <Tooltip content={CustomTooltip} />
                  {selectedCategories.map((c) => (
                    <Line dataKey={c}  key={c} />

                  ))}
                </LineChart>
              </ResponsiveContainer>
            </Box>


          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RechartsTimeChart
