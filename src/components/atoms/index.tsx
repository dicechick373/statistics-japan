import { atom } from 'jotai'

/*
 ** 地域リスト _app.tsxでセット
 */
export const areasAtom = atom([])

/*
 ** 選択中の都道府県コード
 */
export const currentAreaCodeAtom = atom('28000')


/*
 ** 政府区分
 */
export const governmentTypeAtom = atom('prefecture')

/*
 ** 都道府県リスト
 */
export const prefListAtom = atom((get) => get(areasAtom).filter((f) => f.governmentType === 'prefecture'))

/*
 ** 選択中の都道府県コード
 */
export const prefCodeAtom = atom(28)

/*
 ** 市区町村リスト
 */
export const cityListAtom = atom((get) => {
    const areaList = get(areasAtom)
    const prefCode = get(prefCodeAtom)
    return areaList.filter((f) => f.governmentType === 'city')
        .filter((f) => f.prefCode === prefCode)
})

/*
 ** 選択中の市区町村コード
 */
export const cityCodeAtom = atom('28100')