// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'

// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import { useState } from 'react'
import { useRouter } from 'next/router'
import SelectCategories from '../SelectCategories'
import { CardContents } from 'src/types/common';

import useSWR from "swr";

interface Props {
  card: CardContents
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());


const RechartsTimeChart = ({ card }: Props) => {

  /*
  ** useRouter
  */
  const router = useRouter();
  const { code } = router.query;

  const cardId = card.cardId
  const { data, error } = useSWR(code ? `/api/recharts-timechart?cardId=${cardId}&code=${code}` : null, fetcher);

  // console.log(data)

  /*
  ** state
  */
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const categories = card.categories


  if (!data) {
    return null
  }

  return (
    <Card>
      <CardHeader
        title={data.cardTitle}
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent>
        <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 1.25, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h5' sx={{ mr: 3.5 }}>
              {(data.infoData)}
            </Typography>
            <CustomChip
              skin='light'
              size='small'
              label='+42%'
              color='success'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
            />
          </Box>
          <Typography variant='caption'>{(data.infoTitle)}</Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <SelectCategories
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box sx={{ height: 350 }}>
              <ResponsiveContainer>
                <LineChart height={350} data={data.chartData} margin={{ left: 30 }}>
                  <CartesianGrid />
                  <XAxis dataKey='time' />
                  <YAxis />
                  {/* <Brush /> */}
                  {/* <Tooltip content={CustomTooltip} /> */}
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
