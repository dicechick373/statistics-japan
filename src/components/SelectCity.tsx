// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Jotai Imports
import { useAtom } from 'jotai'
import { cityListAtom } from 'src/components/atoms'

// ** Next Imports
import { useRouter } from 'next/router'

const SelectCity = () => {
  // ** useRouter
  const router = useRouter()
  const { governmentType, code, fieldId, menuId } = router.query

  // ** 市区町村以外の場合はreturn
  if (governmentType !== 'city') {
    return <div />
  }

  // ** 市区町村リスト
  const [cityList] = useAtom(cityListAtom)

  // ** 選択時の処理
  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const value: string = event.target.value as string
    router.push(`/city/${value}/${fieldId}/${menuId}`)
  }

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard' size='small'>
        <Select value={code} onChange={handleChange}>
          {cityList.map(option => (
            <MenuItem key={option.cityCode} value={option.cityCode}>
              {option.cityName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectCity
