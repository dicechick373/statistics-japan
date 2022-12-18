import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Area[] | Area>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/resas/arealist.json")
  const areas: Area[] = await response.json()

  res.status(200).json(areas.filter((f) => f.governmentType === 'prefecture'))

}
