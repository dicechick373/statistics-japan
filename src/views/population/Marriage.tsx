// ** React Imports
import { useState } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import useSWR from 'swr'
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  Legend,
  ComposedChart
} from 'recharts'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types Imports
import { ComposedSeries } from 'src/types/common'
import CustomTooltip from 'src/pages/components/CustomTooltip'


// ** Set Card
const cardId = 'marriage'
const cardTitle = '結婚・離婚'

// ** Set Series
const series: ComposedSeries[] = [
  { name: '婚姻件数', group: 'all', stackId: 'a', fill: '#826af9', unit: '人' },
  { name: '離婚件数', group: 'all', stackId: 'a', fill: '#9f87ff', unit: '人' }
]

const filterSeries = (group: string) => {
  return series.filter(f => f.group === group)
}

const Marriage = () => {
  // ** State
  const [activeSeries, setActiveSeries] = useState<ComposedSeries[]>(
    filterSeries('all')
  )

  // ** useRouter
  const { areaCode } = useRouter().query

  // ** useSWR
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error } = useSWR(
    areaCode ? `/api/recharts/?cardId=${cardId}&areaCode=${areaCode}` : null,
    fetcher
  )

  // ** error
  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <Card>
      <CardHeader
        title={cardTitle}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <ComposedChart
              height={350}
              data={data.values}
              barSize={15}
              margin={{ left: -20 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='timeCode' />
              <YAxis orientation={'left'} />
              <Legend
                verticalAlign='top'
                height={30}
                iconSize={20}
                iconType='plainline'
              />
              <Tooltip content={CustomTooltip} />
              {activeSeries.map(d => {
                return (
                  <Line
                    key={d.name}
                    dataKey={d.name}
                    stackId={d.stackId}
                    fill={d.fill}
                  />
                )
              })}
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Marriage
