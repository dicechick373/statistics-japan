import { NextApiRequest, NextApiResponse } from 'next/types'
import { Area } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Area[] | Area>) {

  // ** クエリパラメータ取得
  const cardId = req.query.cardId
  const governmentType = req.query.governmentType
  const code = req.query.code

  // ** 都道府県コード
  const prefCode = code.slice(0, 2)

  // ** Jsonファイル名
  const jsonName = governmentType === 'prefecture' ? cardId : `${cardId}_${prefCode}000`

  // ** Jsonからデータ取得
  const response = await fetch(`https://storage.googleapis.com/statistics-hyogo/card-data/${jsonName}.json`)
  const data = await response.json()

  const areaData = data.filter((f) => f.areaCode === code)

  const resData = areaData.sort((a, b) => a.timeCode - b.timeCode).reduce((pre, cur) => {
    if (pre.some((s) => s.time === cur.timeCode)) {
    } else {
      pre.push({ time: cur.timeCode })
    }

    const p = pre.findIndex(({ time }) => time === cur.timeCode)
    pre[p][cur.categoryName] = cur.value

    return pre
  }, [])

  res.status(200).json(resData)
}
