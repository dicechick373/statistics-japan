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
  return areas.find(f => f.areaCode === code)
}

export const globalStateAtom = atom<GlobalState>(initState)

// ** 地域リスト
export const areaListAtom = atom<Area[]>(areas)

export const currentPrefAtom = atom<Area>(getArea('28000'))

export const currentCityAtom = atom<Area>(getArea('28100'))
