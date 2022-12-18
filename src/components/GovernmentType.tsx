// ** MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Next Imports
import { useRouter } from 'next/router'

import { useAtom } from 'jotai'
import { currentCityAtom, currentPrefAtom } from './atoms'

const GovernmentType = () => {
  // ** 　選択中の地域コード
  const router = useRouter()
  const { governmentType,fieldId, menuId } = router.query

  if (!router.query) {
    return
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPref] = useAtom(currentPrefAtom)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentCity] = useAtom(currentCityAtom)


  const url = (newGov:string) => {
    const code =
      newGov === 'prefecture'
        ? currentPref.areaCode
        : currentCity.areaCode

    return `/${newGov}/${code}/${fieldId}/${menuId}`
  }

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newVal: any
  ) => {
    router.push(url(newVal))
  }

  return (
    <div className='demo-space-x'>
      <ToggleButtonGroup
        size='small'
        value={governmentType}
        exclusive
        onChange={handleChange}
        aria-label='text alignment'
      >
        <ToggleButton value='prefecture' aria-label='left aligned'>
          都道府県の統計
        </ToggleButton>
        <ToggleButton value='city' aria-label='left aligned'>
          市区町村の統計
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default GovernmentType
