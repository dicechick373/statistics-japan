import { NextApiRequest, NextApiResponse } from 'next/types'


export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  // ** クエリパラメータ取得
  const cardId = req.query.cardId
  const areaCode = req.query.areaCode


  // ** Jsonからデータ取得
  const response = await fetch(`https://storage.googleapis.com/statistics-japan/apexcharts/${cardId}/${areaCode}.json`)
  const data = await response.json()

  res.status(200).json(data)
}