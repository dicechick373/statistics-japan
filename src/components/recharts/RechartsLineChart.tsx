// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Brush } from 'recharts'
import { Category, RechartsData } from 'src/types/common'

interface Props {
  direction: 'ltr' | 'rtl'
  data: RechartsData
  selectedCategories: Category[]
}

const RechartsLineChart = ({ direction, data, selectedCategories }: Props) => {
  return (
    <LineChart height={350} data={data.chartData} style={{ direction }} margin={{ left: 30 }}>
      <CartesianGrid />
      <XAxis dataKey='time' reversed={direction === 'rtl'} />
      <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
      {/* <Brush /> */}
      {/* <Tooltip content={CustomTooltip} /> */}
      {selectedCategories.map((c) => (
        <Line dataKey={c} key={c} />

      ))}
    </LineChart>

  )
}

export default RechartsLineChart
