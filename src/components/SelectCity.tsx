// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Next Imports
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { cityListAtom, currentCityAtom } from './atoms'

// const codeToNumber = (code: string | string[]): number => {
//   return +code.slice(0, 2)
// }

const SelectCity = () => {
  // ** useRouter
  const router = useRouter()
  const { governmentType, fieldId, menuId } = router.query

  // ** 市区町村以外の場合はreturn
  if (governmentType !== 'city') {
    return <div />
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentCity, setCurrentCity] = useAtom(currentCityAtom)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cityList] = useAtom(cityListAtom)

  // ** 選択時の処理
  const handleChange = (
    event: SelectChangeEvent<string | string[]>
  ) => {
    const value: string = event.target.value as string

    const area =
      cityList.find(f => f.cityCode === value) ?? cityList[0]
    setCurrentCity(area)

    router.push(`/city/${value}/${fieldId}/${menuId}`)
  }

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard' size='small'>
        <Select value={currentCity.cityCode} onChange={handleChange}>
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
