export type GovernmentType = 'prefecture' | 'city'
export type DesignatedCity = 'join' | 'split'

export type Area = {
  areaCode: string
  areaName: string
  bigCityFlag: string
  cityCode: string
  cityName: string
  governmentType: GovernmentType
  index: number
  prefCode: number
  prefName: string
}

export type Pref = {
  prefCode: number
  prefName: string
  areaCode: string
  areaName: string
}

export type City = {
  prefCode: number
  prefName: string
  areaCode: string
  areaName: string
  cityCode: string
  cityName: string
}

export type Field = {
  fieldId: string
  fieldTitle: string
  icon: string
  index: number
}

export type Menu = {
  fieldId: string
  fieldTitle: string
  index: number
  menuId: string
  menuTitle: string
}

export type CardContents = {
  cardId: string
  cardIndex: string
  cardTitle: string
  categories: Category[]
  chartComponent: string
  estatParams: Object
  fieldId: string
  fieldTitle: string
  governmentType: GovernmentType
  index: number
  menuId: string
  menuTitle: string
}

export type Category = {
  categoryCode: string
  categoryName: string
  isSelect: boolean
  type: string
  yAxis: number
}
