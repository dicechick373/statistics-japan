// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

// ** Next Imports
import { useEffect } from 'react';

// ** Types
interface Props {
  times: any
  selectedTime: any
  setSelectedTime: any
}

const SelectTime = ({ times, selectedTime, setSelectedTime }: Props) => {
  // ** useEffect
  useEffect(() => {
    const data = times.slice(-1)[0]
    setSelectedTime(data.timeCode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ** 選択時の処理
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedTime(event.target.value as string[])
  }

  return (
    <div className='demo-space-x'>
      <FormControl fullWidth>
        <InputLabel id='demo-multiple-checkbox-label'>年次</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={selectedTime}
          label='Age'
          onChange={handleChange}
        >
          {times.map(d => (
            <MenuItem key={d.timeCode} value={d.timeCode}>
              {d.timeName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectTime
