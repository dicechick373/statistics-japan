// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import { Category, RechartsData } from 'src/types/common'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import SelectCategories from '../SelectCategories'
import { useState } from 'react'

interface Props {
  direction: 'ltr' | 'rtl'
  data: RechartsData
  selectedCategories: Category[]
}

const RechartsComposedChart = ({ direction, data }: Props) => {

  /*
   ** state
   */
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const categories = card.categories



  return (
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
          </ResponsiveContainer>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RechartsComposedChart
