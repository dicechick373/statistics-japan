// ** MUI Imports
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// ** Third Party Imports

import { TooltipProps } from 'recharts'

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

export default CustomTooltip
