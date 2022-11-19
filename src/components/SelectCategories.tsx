// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import InputLabel from '@mui/material/InputLabel'

// ** Next Imports
import { useEffect, useState } from 'react';

const ITEM_HEIGHT = 36
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      width: 100,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]


const SelectCategories = ({ categories, setSelectedCategories }: Props) => {

  const [personName, setPersonName] = useState<string[]>([])

  useEffect(() => {
    const data = categories.filter((f) => f.isSelect === 'TRUE').map((d) => d.categoryName)
    setSelectedCategories(data)
  }, [])

  /*
  ** 選択時の処理
  */
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
    setSelectedCategories(event.target.value as string[])
  }

  return (
    <div className='demo-space-x'>
      <FormControl fullWidth>
        <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
        <Select
          multiple
          label='Tag'
          value={personName}
          MenuProps={MenuProps}
          onChange={handleChange}
          id='demo-multiple-checkbox'
          labelId='demo-multiple-checkbox-label'
          renderValue={selected => (selected as unknown as string[]).join(', ')}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectCategories
