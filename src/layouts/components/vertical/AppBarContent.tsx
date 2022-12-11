// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
// import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import GovernmentType from 'src/components/GovernmentType'
import SelectPrefecture from 'src/components/SelectPrefecture'
import SelectCity from 'src/components/SelectCity'

const AppBarContent = () => {
  // ** Props
  // const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        <GovernmentType />
        <SelectPrefecture />
        <SelectCity />
      </Box>
    </Box>
  )
}

export default AppBarContent
