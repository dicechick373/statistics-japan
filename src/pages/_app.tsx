// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'


// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { AuthProvider } from 'src/context/AuthContext'
import {
  SettingsConsumer,
  SettingsProvider,
} from 'src/@core/context/settingsContext'

// ** Styled Components
// import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

// ** Jotai
import { Provider, useAtom } from 'jotai'
import { globalStateAtom } from '../components/atoms'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props

  // Variables
  const getLayout =
    Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  // ** Jotai
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [globalState, setGlobalState] = useAtom(globalStateAtom)

  return (
    <Provider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName} - 統計で見る兵庫県のすがた`}</title>
          <meta
            name='description'
            content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
          />
          <meta
            name='keywords'
            content='Material Design, MUI, Admin Template, React Admin Template'
          />
          <meta
            name='viewport'
            content='initial-scale=1, width=device-width'
          />
        </Head>

        <AuthProvider>
          <SettingsProvider
            {...(setConfig ? { pageSettings: setConfig() } : {})}
          >
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
