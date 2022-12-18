import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area } from 'src/types/common'
import Json from 'src/json/arealist.json'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Area[] | Area>) {

  const areas = Json as Area[]

  if (req.query.areaCode) {
    const areaCode = req.query.areaCode
    res.status(200).json(areas.find((f) => f.areaCode === areaCode))
  } else {
    res.status(200).json(areas)
  }

}
