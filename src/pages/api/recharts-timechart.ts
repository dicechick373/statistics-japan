import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Area[] | Area>) {

  // ** クエリパラメータ取得
  const cardId = req.query.cardId
  const code = req.query.code


  
  // ** Jsonからデータ取得
  // const response = await fetch(`https://storage.googleapis.com/statistics-hyogo/recharts/${cardId}_${code}.json`)
  
  const response = await fetch(`https://storage.googleapis.com/statistics-hyogo/recharts/population-age-prefecture%20_28000.json`)
  const data = await response.json()

  res.status(200).json(data)
}
