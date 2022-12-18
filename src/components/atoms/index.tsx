import { atom } from 'jotai'
import { Area } from 'src/types/common'
import Json from 'src/json/arealist.json'

const initState = {
  governmentType: 'prefecture',
  code: '28000',
  fieldId: 'landweather',
  menuId: 'area',
}

interface GlobalState {
  governmentType: string
  code: string
  fieldId: string
  menuId: string
}

const areas = Json as Area[]

const getArea = (code: string): Area => {

  return areas.find(f => f.areaCode === code) ?? areas[0]
}

export const globalStateAtom = atom<GlobalState>(initState)

// ** 地域リスト
export const areaListAtom = atom<Area[]>(areas)

// ** 都道府県リスト
export const prefListAtom = atom<Area[]>(
  areas.filter(f => f.governmentType === 'prefecture')
)

// ** 市区町村リスト
export const cityListAtom = atom(get => {
  const prefCode = get(currentPrefAtom).prefCode

  return areas
    .filter(f => f.governmentType === 'city')
    .filter(f => f.prefCode === prefCode)
    .filter(f => f.bigCityFlag !== '1')
})

export const currentPrefAtom = atom<Area>(getArea('28000'))

export const currentCityAtom = atom<Area>(getArea('28100'))
