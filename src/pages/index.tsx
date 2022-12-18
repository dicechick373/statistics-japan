// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'


import { useAtom } from 'jotai'
import { globalStateAtom } from 'src/components/atoms'

const Home = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [globalState, setGlobalState] = useAtom(globalStateAtom)
  const { governmentType, code, fieldId, menuId } = globalState


  const url = `/${governmentType}/${code}/${fieldId}/${menuId}/`

  useEffect(() => {
    router.replace(url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Home
