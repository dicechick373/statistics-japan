// ** MUI Imports
import Button from '@mui/material/Button'

const GovernmentType = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='text'>都道府県の統計</Button>
      <Button variant='text' color='secondary'>
        市区町村の統計
      </Button>
    </div>
  )
}

export default GovernmentType
