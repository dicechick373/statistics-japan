// ** React Imports
import { MouseEvent, useState } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Third Party Imports
import useSWR from 'swr'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps
} from 'recharts'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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

// ** Set Card
const cardId = 'total-population'
const cardTitle = '総人口'

// ** Set Group
const group = [
  { name: '総数', value: 'all' },
  { name: '男女', value: 'sex' },
  { name: '年齢３区分', value: 'age' }
]

// ** Set Series
const series = [
  { name: '総数', group: 'all', stackId: 'a', fill: '#826af9', unit: '人' },
  { name: '男性', group: 'sex', stackId: 'a', fill: '#9f87ff', unit: '人' },
  { name: '女性', group: 'sex', stackId: 'a', fill: '#d2b0ff', unit: '人' }
]

const TotalPopulation = () => {
  // ** State
  const [active, setActive] = useState<string | null>('all')
  const [activeSeries, setActiveSeries] = useState<[]>(
    series.filter(f => f.group === 'all')
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

  // ** change active
  const handleActive = (
    event: MouseEvent<HTMLElement>,
    newActive: string | null
  ) => {
    setActive(newActive)
    setActiveSeries(series.filter(f => f.group === newActive))
  }

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
          <ToggleButtonGroup exclusive value={active} onChange={handleActive}>
            {group.map(d => {
              return (
                <ToggleButton key={d.value} value={d.value}>
                  {d.name}
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>
        }
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <BarChart
              height={350}
              data={data}
              barSize={15}
              margin={{ left: -20 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='timeCode' />
              <YAxis orientation={'left'} />
              <Tooltip content={CustomTooltip} />
              {activeSeries.map(d => {
                return (
                  <Bar
                    key={d.name}
                    dataKey={d.name}
                    stackId={d.stackId}
                    fill={d.fill}
                  />
                )
              })}
              {/* <Bar dataKey='総数' stackId='a' fill='#826af9' />
              <Bar dataKey='男性' stackId='a' fill='#9f87ff' />
              <Bar dataKey='女性' stackId='a' fill='#d2b0ff' /> */}
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TotalPopulation
