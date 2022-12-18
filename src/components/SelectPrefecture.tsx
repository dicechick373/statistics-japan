// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Next Imports
import { useRouter } from 'next/router'

import {
  areaListAtom,
  currentCityAtom,
  currentPrefAtom,
  prefListAtom,
} from './atoms'
import { useAtom } from 'jotai'
import { Area } from 'src/types/common'

const SelectPrefecture = () => {
  // ** useRouter
  const router = useRouter()
  const { fieldId, menuId } = router.query

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [prefList] = useAtom(prefListAtom)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [areaList] = useAtom(areaListAtom)
  const newCity = (areaCode: string): Area => {
    const prefCode:number = +areaCode.slice(0, 2)
    const cities = areaList.filter(f => f.prefCode === prefCode)

    return cities[0]
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPref, setCurrentPref] = useAtom(currentPrefAtom)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentCity, setCurrentCity] = useAtom(currentCityAtom)

  // ** 選択時の処理
  const handleChange = (
    event: SelectChangeEvent<string | string[]>
  ) => {
    const value: string = event.target.value as string

    const area =
      prefList.find(f => f.areaCode === value) ?? prefList[0]
    setCurrentPref(area)
    setCurrentCity(newCity(value))

    router.push(`/prefecture/${value}/${fieldId}/${menuId}`)
  }

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard' size='small'>
        <Select value={currentPref.areaCode} onChange={handleChange}>
          {prefList.map(option => (
            <MenuItem key={option.areaCode} value={option.areaCode}>
              {option.prefName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectPrefecture
