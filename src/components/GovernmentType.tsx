// ** MUI Imports
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// ** Jotai Imports
import { useAtom } from 'jotai';
import { cityCodeAtom, prefCodeAtom } from 'src/components/atoms';

// ** Next Imports
import { useRouter } from 'next/router';
import { useState } from 'react';

const GovernmentType = () => {

  /*
 ** Jotai
 */
  const [governmentType, setGovernmentType] = useState<string | null>('prefecture');
  const [cityCode] = useAtom(cityCodeAtom)
  const [prefCode] = useAtom(prefCodeAtom)

  const router = useRouter();
  const { fieldId, menuId } = router.query


  const codeToString = (code: number): string => {
    return ('0000000000' + code).slice(-2) + '000'
  }

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newVal: any,
  ) => {
    setGovernmentType(newVal)
    const url = newVal === 'prefecture'
      ? `/prefecture/${codeToString(prefCode)}/${fieldId}/${menuId}`
      : `/city/${cityCode}/${fieldId}/${menuId}`

    router.push(url)
  };

  return (
    <div className='demo-space-x'>
      <ToggleButtonGroup
        size="small"
        value={governmentType}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
      >
        <ToggleButton value="prefecture" aria-label="left aligned">
          都道府県の統計
        </ToggleButton>
        <ToggleButton value="city" aria-label="left aligned">
          市区町村の統計
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default GovernmentType
