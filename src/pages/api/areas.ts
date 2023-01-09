import { NextApiRequest, NextApiResponse } from 'next/types'
import arealist from 'src/db/arealist.json'
import Area from 'src/types/common'

export type Area = {
  index: number,
  prefCode: number,
  prefName: string,
  cityCode?: string,
  cityName?: string,
  bigCityFlag?: string,
  areaCode: string,
  areaName: string,
  governmentType: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  // ** 地域一覧
  const areas: Area[] = arealist

  // ** クエリパラメータ取得
  const areaCode= req.query.areaCode

  if (areaCode) {
    const area: Area = areas.find((f) => f.areaCode === areaCode)

    res.status(200).json(area)

  } else {

    res.status(200).json(areas)
  }

}