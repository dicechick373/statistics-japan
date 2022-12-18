// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Next Imports
import { useRouter } from 'next/router'

import useSWR, { Fetcher } from 'swr'
import { Area } from 'src/types/common'

// ** 都道府県コードを文字列5桁に変換
const codeToString = (code: number): string  => {
  return ('0000000000' + code).slice(-2) + '000'
}

const codeToNumber = (code: string | string[]): number => {
  return +code.slice(0, 2)
}

const SelectPrefecture = () => {
  // ** useRouter
  const router = useRouter()
  const { code, fieldId, menuId } = router.query

  // ** useSWR
  const url = `/api/prefs`
  const fetcher: Fetcher<Area[]> = (url: string) =>
    fetch(url).then(res => res.json())
  const { data: prefList } = useSWR(url, fetcher)

  if (!prefList) {
    return
  }

  // ** 都道府県コードの取得
  const prefCode = code ? codeToNumber(code) : 28

  // ** 選択時の処理
  const handleChange = (
    event: SelectChangeEvent<number | number[]>
  ) => {
    const value: number = event.target.value as number
    router.push(
      `/prefecture/${codeToString(value)}/${fieldId}/${menuId}`
    )
  }

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard' size='small'>
        <Select value={prefCode} onChange={handleChange}>
          {prefList.map(option => (
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
