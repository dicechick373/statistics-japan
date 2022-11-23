// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Brush } from 'recharts'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SelectCategories from '../SelectCategories'
import { CardContents } from 'src/types/common';

interface Props {
  direction: 'ltr' | 'rtl'
  card: CardContents
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  /*
  ** chartData
  */
  const [chartData, setChartData] = useState()
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
      setChartData(data)
    }
  }

  /*
  ** cardTitle
  */
  const [cardTitle, setCardTitle] = useState<string>()
  const fetchArea = async () => {
    if (router.isReady) {
      const response = await fetch(`/api/areas?areaCode=${router.query.code}`)
      const data = await response.json()
      setCardTitle(`${data.areaName}${card.cardTitle.replace('都道府県', '').replace('市区町村', '')}`)
    }
  }

  /*
  ** useLayoutEffect
  */
  useLayoutEffect(() => {
    fetchData()
    fetchArea()
  }, [router.query])

  const categories = card.categories

  // console.log(card)

  return (
    <Card>
      <CardHeader
        title={cardTitle}
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
                <LineChart height={350} data={chartData} style={{ direction }} margin={{ left: -20 }}>
                  <CartesianGrid />
                  <XAxis dataKey='time' reversed={direction === 'rtl'} />
                  <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
                  <Brush dataKey='time' startIndex={4} endIndex={10} />
                  <Tooltip content={CustomTooltip} />
                  {selectedCategories.map((c) => (
                    <Line dataKey={c} key={c} />

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
