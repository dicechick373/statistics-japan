// ** MUI Imports
import Button from '@mui/material/Button'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// ** Jotai Imports
import { useAtom } from 'jotai';
import { governmentTypeAtom } from 'src/components/atoms';

const GovernmentType = () => {
  const [governmentType, setGovernmentType] = useAtom(governmentTypeAtom)

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    console.log(newAlignment)
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
