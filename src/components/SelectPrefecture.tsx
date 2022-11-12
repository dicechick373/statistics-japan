// ** MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Jotai Imports
import { useAtom } from 'jotai';
import { areaListAtom, cityCodeAtom, prefCodeAtom, prefListAtom } from 'src/components/atoms';

import { useRouter } from 'next/router';

const SelectPrefecture = () => {

  const router = useRouter();
  const { fieldId, menuId } = router.query

  /*
  ** 都道府県リスト
  */
  const [prefList] = useAtom(prefListAtom)

  /*
  ** 選択中の都道府県コード
  */
  const [prefCode, setPrefCode] = useAtom(prefCodeAtom)

  const [cityCode, setCityCode] = useAtom(cityCodeAtom)

  const [areaList] = useAtom(areaListAtom)
  const initCityCode = (prefCode) => {
    return areaList.filter((f) => f.prefCode === prefCode)
      .find((f) => f.governmentType === 'city').cityCode
  }

  const codeToString = (code: number): string => {
    return ('0000000000' + code).slice(-2) + '000'
  }

  /*
  ** 選択時の処理
  */
  const handleChange = (event: React.MouseEvent<HTMLElement>,) => {
    const newPrefCode = event.target.value
    setPrefCode(newPrefCode)
    setCityCode(initCityCode(newPrefCode))
    router.push(`/${fieldId}/${menuId}/prefecture/${codeToString(event.target.value)}`)
  };

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard' size="small">
        <Select
          value={prefCode}
          onChange={handleChange}
        >
          {prefList.map((option) => (
            <MenuItem key={option.prefCode} value={option.prefCode}>
              {option.prefName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectPrefecture
