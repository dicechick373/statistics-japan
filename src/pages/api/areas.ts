import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Area[] | Area>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/resas/arealist.json")
  const areas: Area[] = await response.json()

  if (req.query.areaCode) {
    const areaCode = req.query.areaCode
    res.status(200).json(areas.find((f) => f.areaCode === areaCode))
  } else {
    res.status(200).json(areas)
  }

}
