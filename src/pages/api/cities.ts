import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area, City } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<City[] | City>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/resas/citylist.json")
  const areas: Area[] = await response.json()

  const cities: City[] = areas.filter((f) => f.governmentType === 'city')

  if (req.query.prefCode) {
    const prefCode = req.query.prefCode
    res.status(200).json(cities.find((f) => f.prefCode === prefCode))
  } else {
    res.status(200).json(cities)
  }

  
}
