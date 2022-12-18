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

const navigation = (): VerticalNavItemsType => {

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
          path: `/nav/landweather/area`
        },
        {
          title: '気候',
          path: `/nav/landweather/climate`
        },
        {
          title: '自然・公園',
          path: `/nav/landweather/park`
        }
      ]
    },
    {
      title: '人口・世帯',
      icon: AccountGroupOutline,
      children: [
        {
          title: '人口',
          path: `/nav/population/population`
        },
        {
          title: '世帯',
          path: `/nav/population/household`
        },
        {
          title: '婚姻',
          path: `/nav/population/marriage`
        },
        {
          title: '出生',
          path: `/nav/population/birth`
        },
        {
          title: '死亡',
          path: `/nav/population/death`
        },
        {
          title: '流入・流出',
          path: `/nav/population/inflowoutflow`
        },
        {
          title: '転入・転出',
          path: `/nav/population/moveinmoveout`
        }
      ]
    },
    {
      title: '労働・賃金',
      icon: BriefcaseOutline,
      children: [
        {
          title: '労働力人口',
          path: `/nav/laborwage/labor-force`
        },
        {
          title: '労働・賃金',
          path: `/nav/laborwage/laborwage`
        }
      ]
    },
    {
      title: '農林水産業',
      icon: Tractor,
      children: [
        {
          title: '農業',
          path: `/nav/agriculture/agriculture`
        },
        {
          title: '林業',
          path: `/nav/agriculture/forestry`
        },
        {
          title: '漁業',
          path: `/nav/agriculture/fishing`
        }
      ]
    },
    {
      title: '鉱工業',
      icon: Factory,
      children: [
        {
          title: '製造業',
          path: `/nav/miningindustry/manufacturing-industry`
        },
        {
          title: '工業用水',
          path: `/nav/miningindustry/industrial-water`
        }
      ]
    },
    {
      title: '商業・サービス業',
      icon: StoreOutline,
      children: [
        {
          title: '商業',
          path: `/nav/commercial/commercial`
        }
      ]
    },
    {
      title: '企業・家計・経済',
      icon: Cash,
      children: [
        {
          title: '総生産',
          path: `/nav/economy/gross-domestic-product`
        },
        {
          title: '家計',
          path: `/nav/economy/household-budget`
        },
        {
          title: '物価',
          path: `/nav/economy/price`
        },
        {
          title: '売上',
          path: `/nav/economy/sales`
        },
        {
          title: '事業所等',
          path: `/nav/economy/establishments`
        }
      ]
    },
    {
      title: '住宅・土地・建設',
      icon: OfficeBuildingOutline,
      children: [
        {
          title: '土地',
          path: `/nav/construction/land`
        },
        {
          title: '建設',
          path: `/nav/construction/construction`
        },
      ]
    },
    {
      title: 'エネルギー・水',
      icon: WaterOutline,
      children: [
        {
          title: 'エネルギー',
          path: `/nav/energy/energy`
        },
        {
          title: 'ごみ',
          path: `/nav/energy/garbage`
        }
      ]
    },
    {
      title: '運輸・観光',
      icon: TruckOutline,
      children: [
        {
          title: '自動車',
          path: `/nav/tourism/car`
        },
        {
          title: '交通',
          path: `/nav/tourism/traffic`
        },
        {
          title: '宿泊施設',
          path: `/nav/tourism/hotel`
        }
      ]
    },
    {
      title: '教育・文化・スポーツ',
      icon: SchoolOutline,
      children: [
        {
          title: '幼稚園',
          path: `/nav/educationsports/kindergarten`
        },
        {
          title: '小学校',
          path: `/nav/educationsports/primary-schools`
        },
        {
          title: '中学校',
          path: `/nav/educationsports/junior-high-school`
        },
        {
          title: '高等学校',
          path: `/nav/educationsports/high-school`
        },
        {
          title: '短大・大学',
          path: `/nav/educationsports/university`
        }
      ]
    },
    {
      title: '行財政',
      icon: Finance,
      children: [
        {
          title: '職員',
          path: `/nav/administrativefinancial/staff`
        },
        {
          title: '財政',
          path: `/nav/administrativefinancial/finance`
        },
        {
          title: '議会',
          path: `/nav/administrativefinancial/parliament`
        }
      ]
    },
    {
      title: '司法・安全・環境',
      icon: SproutOutline,
      children: [
        {
          title: '交通事故',
          path: `/nav/safetyenvironment/traffic-accident`
        },
        {
          title: '犯罪',
          path: `/nav/safetyenvironment/crime`
        },
        {
          title: '災害',
          path: `/nav/safetyenvironment/disaster`
        },
        {
          title: '環境・公害',
          path: `/nav/safetyenvironment/environment`
        },
        {
          title: '火災・消防',
          path: `/nav/safetyenvironment/fires`
        }
      ]
    },
    {
      title: '医療・社会保障・衛生',
      icon: MedicalBag,
      children: [
        {
          title: '医療',
          path: `/nav/socialsecurity/medical`
        },
        {
          title: '生活保護',
          path: `/nav/socialsecurity/welfare`
        }
      ]
    },
    {
      title: '国際',
      icon: Earth,
      children: [
        {
          title: '外国人',
          path: `/nav/international/foreigner`
        },
        {
          title: '入国・出国',
          path: `/nav/international/immigrant`
        }
      ]
    },
  ]
}

export default navigation
