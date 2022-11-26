// ** Icon imports
import WeatherPartlyCloudy from 'mdi-material-ui/WeatherPartlyCloudy'
import AccountGroupOutline from 'mdi-material-ui/AccountGroupOutline'
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'
import Tractor from 'mdi-material-ui/Tractor'
import Factory from 'mdi-material-ui/Factory'
import StoreOutline from 'mdi-material-ui/StoreOutline'
import Cash from 'mdi-material-ui/Cash'
import OfficeBuildingOutline from 'mdi-material-ui/OfficeBuildingOutline'
import WaterOutline from 'mdi-material-ui/WaterOutline'
import TruckOutline from 'mdi-material-ui/TruckOutline'
import SchoolOutline from 'mdi-material-ui/SchoolOutline'
import Finance from 'mdi-material-ui/Finance'
import SproutOutline from 'mdi-material-ui/SproutOutline'
import MedicalBag from 'mdi-material-ui/MedicalBag'
import Earth from 'mdi-material-ui/Earth'


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Jotai Imports
import { useAtom } from 'jotai'
import { governmentTypeAtom, currentAreaCodeAtom } from 'src/components/atoms';

const navigation = (): VerticalNavItemsType => {

  const [governmentType] = useAtom(governmentTypeAtom)
  const [areaCode] = useAtom(currentAreaCodeAtom)


  return [
    {
      sectionTitle: '統計分野'
    },
    {
      title: '国土・気象',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '面積',
          path: `/landweather/area/${governmentType}/${areaCode}`
        },
        {
          title: '気候',
          path: `/landweather/climate/${governmentType}/${areaCode}`
        },
        {
          title: '自然・公園',
          path: `/landweather/park/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '人口・世帯',
      icon: AccountGroupOutline,
      children: [
        {
          title: '人口',
          path: `/population/population/${governmentType}/${areaCode}`
        },
        {
          title: '世帯',
          path: `/population/household/${governmentType}/${areaCode}`
        },
        {
          title: '婚姻',
          path: `/population/marriage/${governmentType}/${areaCode}`
        },
        {
          title: '出生',
          path: `/population/birth/${governmentType}/${areaCode}`
        },
        {
          title: '死亡',
          path: `/population/death/${governmentType}/${areaCode}`
        },
        {
          title: '流入・流出',
          path: `/population/inflowoutflow/${governmentType}/${areaCode}`
        },
        {
          title: '転入・転出',
          path: `/population/moveinmoveout/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '労働・賃金',
      icon: BriefcaseOutline,
      children: [
        {
          title: '労働力人口',
          path: `/laborwage/labor-force/${governmentType}/${areaCode}`
        },
        {
          title: '労働・賃金',
          path: `/laborwage/laborwage/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '農林水産業',
      icon: Tractor,
      children: [
        {
          title: '農業',
          path: `/agriculture/agriculture/${governmentType}/${areaCode}`
        },
        {
          title: '林業',
          path: `/agriculture/forestry/${governmentType}/${areaCode}`
        },
        {
          title: '漁業',
          path: `/agriculture/fishing/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '鉱工業',
      icon: Factory,
      children: [
        {
          title: '製造業',
          path: `/miningindustry/manufacturing-industry/${governmentType}/${areaCode}`
        },
        {
          title: '工業用水',
          path: `/miningindustry/industrial-water/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '商業・サービス業',
      icon: StoreOutline,
      children: [
        {
          title: '商業',
          path: `/commercial/commercial/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '企業・家計・経済',
      icon: Cash,
      children: [
        {
          title: '総生産',
          path: `/economy/gross-domestic-product/${governmentType}/${areaCode}`
        },
        {
          title: '家計',
          path: `/economy/household-budget/${governmentType}/${areaCode}`
        },
        {
          title: '物価',
          path: `/economy/price/${governmentType}/${areaCode}`
        },
        {
          title: '売上',
          path: `/economy/sales/${governmentType}/${areaCode}`
        },
        {
          title: '事業所等',
          path: `/economy/establishments/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '住宅・土地・建設',
      icon: OfficeBuildingOutline,
      children: [
        {
          title: '土地',
          path: `/construction/land/${governmentType}/${areaCode}`
        },
        {
          title: '建設',
          path: `/construction/construction/${governmentType}/${areaCode}`
        },
      ]
    },
    {
      title: 'エネルギー・水',
      icon: WaterOutline,
      children: [
        {
          title: 'エネルギー',
          path: `/energy/energy/${governmentType}/${areaCode}`
        },
        {
          title: 'ごみ',
          path: `/energy/garbage/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '運輸・観光',
      icon: TruckOutline,
      children: [
        {
          title: '自動車',
          path: `/tourism/car/${governmentType}/${areaCode}`
        },
        {
          title: '交通',
          path: `/tourism/traffic/${governmentType}/${areaCode}`
        },
        {
          title: '宿泊施設',
          path: `/tourism/hotel/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '教育・文化・スポーツ',
      icon: SchoolOutline,
      children: [
        {
          title: '幼稚園',
          path: `/educationsports/kindergarten/${governmentType}/${areaCode}`
        },
        {
          title: '小学校',
          path: `/educationsports/primary-schools/${governmentType}/${areaCode}`
        },
        {
          title: '中学校',
          path: `/educationsports/junior-high-school/${governmentType}/${areaCode}`
        },
        {
          title: '高等学校',
          path: `/educationsports/high-school/${governmentType}/${areaCode}`
        },
        {
          title: '短大・大学',
          path: `/educationsports/university/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '行財政',
      icon: Finance,
      children: [
        {
          title: '職員',
          path: `/administrativefinancial/staff/${governmentType}/${areaCode}`
        },
        {
          title: '財政',
          path: `/administrativefinancial/finance/${governmentType}/${areaCode}`
        },
        {
          title: '議会',
          path: `/administrativefinancial/parliament/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '司法・安全・環境',
      icon: SproutOutline,
      children: [
        {
          title: '交通事故',
          path: `/safetyenvironment/traffic-accident/${governmentType}/${areaCode}`
        },
        {
          title: '犯罪',
          path: `/safetyenvironment/crime/${governmentType}/${areaCode}`
        },
        {
          title: '災害',
          path: `/safetyenvironment/disaster/${governmentType}/${areaCode}`
        },
        {
          title: '環境・公害',
          path: `/safetyenvironment/environment/${governmentType}/${areaCode}`
        },
        {
          title: '火災・消防',
          path: `/safetyenvironment/fires/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '医療・社会保障・衛生',
      icon: MedicalBag,
      children: [
        {
          title: '医療',
          path: `/socialsecurity/medical/${governmentType}/${areaCode}`
        },
        {
          title: '生活保護',
          path: `/socialsecurity/welfare/${governmentType}/${areaCode}`
        }
      ]
    },
    {
      title: '国際',
      icon: Earth,
      children: [
        {
          title: '外国人',
          path: `/international/foreigner/${governmentType}/${areaCode}`
        },
        {
          title: '入国・出国',
          path: `/international/immigrant/${governmentType}/${areaCode}`
        }
      ]
    },
  ]
}

export default navigation
