import { NextApiRequest, NextApiResponse } from 'next/types'
import { Field, Menu } from 'src/types/common'


export default async function handler(req: NextApiRequest, res: NextApiResponse<City[] | City>) {

  // fields
  const res_fields = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-fields.json")
  const fields: Field[] = await res_fields.json()

  // menus
  const res_menus = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-menus.json")
  const menus: Menu[] = await res_menus.json()

  const items = fields.map((field) => {
    return {
      title: field.fieldTitle,
      icon: field.icon,
      children: menus.filter((f) => f.fieldId === field.fieldId).map((menu) => {
        return {
          title: menu.menuTitle,
          path: `/${field.fieldId}/${menu.menuId}`,
        }
      })
    }
  })

  res.status(200).json(items)

}
