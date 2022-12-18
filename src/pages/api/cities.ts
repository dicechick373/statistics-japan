import { NextApiRequest, NextApiResponse } from 'next/types'
import { City } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<City[] | City>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/resas/citylist.json")
  const areas: City[] = await response.json()

  if (req.query.prefCode) {
    const prefCode = +req.query.prefCode
    res.status(200).json(areas.filter((f) => f.prefCode === prefCode).filter((f) => f.bigCityFlag !== '1'))
  } else {
    res.status(200).json(areas)
  }


}
