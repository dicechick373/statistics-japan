// ** MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Jotai Imports
import { useAtom } from 'jotai';
import { cityCodeAtom, cityListAtom } from 'src/components/atoms';

import { useRouter } from 'next/router';

const SelectCity = () => {

  const router = useRouter();
  const { fieldId, menuId } = router.query

  /*
  ** 市区町村リスト
  */
  const [cityList] = useAtom(cityListAtom)

  /*
  ** 選択中の市区町村コード
  */
  const [cityCode, setCityCode] = useAtom(cityCodeAtom)


  /*
  ** 選択時の処理
  */
  const handleChange = (event) => {
    setCityCode(event.target.value)
    router.push(`/city/${event.target.value}/${fieldId}/${menuId}`)
  };

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard' size="small">
        <Select
          value={cityCode}
          onChange={handleChange}
        >
          {cityList.map((option) => (
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
