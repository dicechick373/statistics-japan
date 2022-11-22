import { atom } from 'jotai'

/*
 ** 地域リスト _app.tsxでセット
 */
export const areaListAtom = atom([])

/*
 ** 選択中の地域コード
 */
export const currentAreaCodeAtom = atom('28000')



/*
 ** 政府区分
 */
export const governmentTypeAtom = atom('prefecture')

/*
 ** 都道府県リスト
 */
export const prefListAtom = atom((get) => get(areaListAtom).filter((f) => f.governmentType === 'prefecture'))

/*
 ** 選択中の都道府県コード
 */
export const prefCodeAtom = atom(28)

/*
 ** 市区町村リスト
 */
export const cityListAtom = atom((get) => {
    const areaList = get(areaListAtom)
    const prefCode = get(prefCodeAtom)
    return areaList.filter((f) => f.governmentType === 'city')
        .filter((f) => f.prefCode === prefCode)
})

/*
 ** 市区町村コードの初期値（都道府県選択後）
 */
export const initCityCodeAtom = atom((get) => {
    const cityList = get(cityListAtom)

    return cityList[0]
})


/*
 ** 選択中の市区町村コード
 */
export const cityCodeAtom = atom('28100')