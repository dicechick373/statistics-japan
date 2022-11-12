import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Area[] | Area>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-cards.json")
  const cards = await response.json()

  if (req.query.menuId) {
    const menuId = req.query.menuId
    console.log(menuId)
    res.status(200).json(cards.filter((f) => f.menuId === menuId))
  } else {
    res.status(200).json(cards)
  }



}
