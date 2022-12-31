// ** React Imports
import { useState } from 'react'

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
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  BarChart,
  Bar
} from 'recharts'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import SelectTime from 'src/pages/components/SelectTime'

// ** Types
import { useRouter } from 'next/router'

// ** Set Card
const cardId = 'population-pyramid'
const cardTitle = '人口構成'



const CustomTooltip = (data: TooltipProps<any, any>) => {
  const { active, payload } = data

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label}</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { color: i.fill, mr: 2.5 }
                }}
                key={i.dataKey}
              >
                <Icon icon='mdi:circle' fontSize='0.6rem' />
                <Typography variant='body2'>{`${i.dataKey} : ${
                  i.payload[i.dataKey]
                }`}</Typography>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const PopulationPyramid = () => {
  // ** States
  const [selectedTime, setSelectedTime] = useState<string[]>([])

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
        action={
          <SelectTime
            times={data.times}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        }
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <BarChart
              height={400}
              layout='vertical'
              data={data.values.filter(f => f.timeCode === selectedTime)}
              stackOffset='sign'
              margin={{ left: 30 }}
            >
              <CartesianGrid />
              <XAxis type='number' />
              <YAxis
                type='category'
                dataKey='categoryName'
                interval={0}
                hide={true}
              />
              <Tooltip content={CustomTooltip} />
              <Bar dataKey='男性' fill='#2250A2' stackId='stack' />
              <Bar dataKey='女性' fill='#FFB6C1' stackId='stack' />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PopulationPyramid
