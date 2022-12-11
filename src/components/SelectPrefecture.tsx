// ** MUI Imports
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Jotai Imports
import { useAtom } from 'jotai'
import { prefCodeAtom, prefListAtom } from 'src/components/atoms'

// ** Next Imports
import { useRouter } from 'next/router'

const SelectPrefecture = () => {
  // ** useRouter
  const router = useRouter()
  const { fieldId, menuId } = router.query

  // ** 都道府県リスト
  const [prefList] = useAtom(prefListAtom)

  // ** 選択中の都道府県コード
  const [prefCode, setPrefCode] = useAtom(prefCodeAtom)

  // ** 都道府県コードを文字列5桁に変換
  const codeToString = (code: number): string => {
    return ('0000000000' + code).slice(-2) + '000'
  }

  // ** 選択時の処理
  const handleChange = (event: SelectChangeEvent<number | number[]>) => {
    const value: number = event.target.value as number
    setPrefCode(value)
    router.push(`/prefecture/${codeToString(value)}/${fieldId}/${menuId}`)
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
