// ** MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** Jotai Imports
import { useAtom } from 'jotai';
import { prefCodeAtom, prefListAtom } from 'src/components/atoms';

const SelectPrefecture = () => {


  /*
  ** 都道府県リスト
  */
  const [prefList] = useAtom(prefListAtom)

  /*
  ** 選択中の都道府県コード
  */
  const [prefCode, setPrefCode] = useAtom(prefCodeAtom)

  /*
  ** 選択時の処理
  */
  const handleChange = (event) => {
    setPrefCode(event.target.value);
  };

  return (
    <div className='demo-space-x'>
      <FormControl variant='standard'>
        <Select>
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
