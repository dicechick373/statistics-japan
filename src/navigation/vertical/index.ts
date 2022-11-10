// ** Icon imports
import Table from 'mdi-material-ui/Table'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import WeatherPartlyCloudy from 'mdi-material-ui/WeatherPartlyCloudy'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { useAtom } from 'jotai'
import { prefListAtom } from 'src/pages/components/atoms'

const navigation = (): VerticalNavItemsType => {

  const [prefList] = useAtom(prefListAtom)
  console.log(prefList)

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
          path: '/landweather/area'
        },
        {
          title: '気候',
          path: '/landweather/climate'
        },
        {
          title: '自然・公園',
          path: '/landweather/park'
        }
      ]
    },
    {
      title: '人口・世帯',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '人口',
          path: '/population/population'
        },
        {
          title: '世帯',
          path: '/population/household'
        },
        {
          title: '婚姻',
          path: '/population/marriage'
        },
        {
          title: '出生',
          path: '/population/birth'
        },
        {
          title: '死亡',
          path: '/population/death'
        },
        {
          title: '流入・流出',
          path: '/population/inflowoutflow'
        },
        {
          title: '転入・転出',
          path: '/population/moveinmoveout'
        }
      ]
    },
    {
      title: '労働・賃金',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '労働力人口',
          path: '/laborwage/labor-force'
        },
        {
          title: '労働・賃金',
          path: '/laborwage/laborwage'
        }
      ]
    },
    {
      title: '農林水産業',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '農業',
          path: '/agriculture/agriculture'
        },
        {
          title: '林業',
          path: '/agriculture/forestry'
        },
        {
          title: '漁業',
          path: '/agriculture/fishing'
        }
      ]
    },
    {
      title: '鉱工業',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '製造業',
          path: '/miningindustry/manufacturing-industry'
        },
        {
          title: '工業用水',
          path: '/miningindustry/industrial-water'
        }
      ]
    },
    {
      title: '商業・サービス業',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '商業',
          path: '/commercial/commercial'
        }
      ]
    },
    {
      title: '企業・家計・経済',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '総生産',
          path: '/economy/gross-domestic-product'
        },
        {
          title: '家計',
          path: '/economy/household-budget'
        },
        {
          title: '物価',
          path: '/economy/price'
        },
        {
          title: '売上',
          path: '/economy/sales'
        },
        {
          title: '事業所等',
          path: '/economy/establishments'
        }
      ]
    },
    {
      title: '住宅・土地・建設',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '土地',
          path: '/construction/land'
        },
        {
          title: '建設',
          path: '/construction/construction'
        },
      ]
    },
    {
      title: 'エネルギー・水',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: 'エネルギー',
          path: '/energy/energy'
        },
        {
          title: 'ごみ',
          path: '/energy/garbage'
        }
      ]
    },
    {
      title: '運輸・観光',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '自動車',
          path: '/tourism/car'
        },
        {
          title: '交通',
          path: '/tourism/traffic'
        },
        {
          title: '宿泊施設',
          path: '/tourism/hotel'
        }
      ]
    },
    {
      title: '教育・文化・スポーツ',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '幼稚園',
          path: '/educationsports/kindergarten'
        },
        {
          title: '小学校',
          path: '/educationsports/primary-schools'
        },
        {
          title: '中学校',
          path: '/educationsports/junior-high-school'
        },
        {
          title: '高等学校',
          path: '/educationsports/high-school'
        },
        {
          title: '短大・大学',
          path: '/educationsports/university'
        }
      ]
    },
    {
      title: '行財政',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '職員',
          path: '/administrativefinancial/staff'
        },
        {
          title: '財政',
          path: '/administrativefinancial/finance'
        },
        {
          title: '議会',
          path: '/administrativefinancial/parliament'
        }
      ]
    },
    {
      title: '司法・安全・環境',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '交通事故',
          path: '/safetyenvironment/traffic-accident'
        },
        {
          title: '犯罪',
          path: '/safetyenvironment/crime'
        },
        {
          title: '災害',
          path: '/safetyenvironment/disaster'
        },
        {
          title: '環境・公害',
          path: '/safetyenvironment/environment'
        },
        {
          title: '火災・消防',
          path: '/safetyenvironment/fires'
        }
      ]
    },
    {
      title: '医療・社会保障・衛生',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '医療',
          path: '/socialsecurity/medical'
        },
        {
          title: '生活保護',
          path: '/socialsecurity/welfare'
        }
      ]
    },
    {
      title: '国際',
      icon: WeatherPartlyCloudy,
      children: [
        {
          title: '外国人',
          path: '/international/foreigner'
        },
        {
          title: '入国・出国',
          path: '/international/immigrant'
        }
      ]
    },
  ]
}

export default navigation
