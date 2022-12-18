// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Jotai Imports
import { useAtom } from 'jotai'
import { globalStateAtom } from 'src/components/atoms'

const Push = () => {
  // ** useRouter
  const router = useRouter()
  const { fieldId, menuId } = router.query

  // ** useRouter
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [globalState, setGlobalState] = useAtom(globalStateAtom)
  const { governmentType, code } = globalState

  const url = `/${governmentType}/${code}/${fieldId}/${menuId}/`

  useEffect(() => {
    router.push(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Push
