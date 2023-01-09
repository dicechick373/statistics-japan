// ** React Imports
import { useState, useEffect, ReactElement, SyntheticEvent } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Components
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Type Import

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components
import Dashboard from 'src/views/population/dashboard'
import Population from 'src/views/population/population'
import Marriage from 'src/views/population/marriage'
import Inflowoutflow from 'src/views/population/inflowoutflow'
import { Area } from 'src/types/common'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      minWidth: 130
    }
  }
}))

const PopulationTab = ({ tab, area }: { tab: string; area: Area }) => {

  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // ** Hooks
  const router = useRouter()
  const {areaCode} = router.query

  const hideText = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true)
    setActiveTab(value)
    router
      .push({
        pathname: `/population/${value.toLowerCase()}/${areaCode}`
      })
      .then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (area) {
      setIsLoading(false)
    }
  }, [area])

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList: { [key: string]: ReactElement } = {
    dashboard: <Dashboard area={area as Area} />,
    population: <Population area={area as Area} />,
    marriage: <Marriage area={area as Area} />,
    inflowoutflow: <Inflowoutflow area={area as Area} />
  }

  return (
    <Grid container spacing={6}>
      {activeTab === undefined ? null : (
        <Grid item xs={12}>
          <TabContext value={activeTab}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <TabList
                  variant='scrollable'
                  scrollButtons='auto'
                  onChange={handleChange}
                  aria-label='customized tabs example'
                >
                  <Tab
                    value='dashboard'
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          ...(!hideText && { '& svg': { mr: 2 } })
                        }}
                      >
                        <Icon icon='mdi:account-outline' />
                        {!hideText && 'Dashboard'}
                      </Box>
                    }
                  />
                  <Tab
                    value='population'
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          ...(!hideText && { '& svg': { mr: 2 } })
                        }}
                      >
                        <Icon icon='mdi:account-multiple-outline' />
                        {!hideText && '人口・世帯'}
                      </Box>
                    }
                  />
                  <Tab
                    value='marriage'
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          ...(!hideText && { '& svg': { mr: 2 } })
                        }}
                      >
                        <Icon icon='mdi:view-grid-outline' />
                        {!hideText && '結婚・離婚'}
                      </Box>
                    }
                  />
                  <Tab
                    value='inflowoutflow'
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          ...(!hideText && { '& svg': { mr: 2 } })
                        }}
                      >
                        <Icon icon='mdi:link-variant' />
                        {!hideText && '転入・転出'}
                      </Box>
                    }
                  />
                </TabList>
              </Grid>
              <Grid item xs={12}>
                {isLoading ? (
                  <Box
                    sx={{
                      mt: 6,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <CircularProgress sx={{ mb: 4 }} />
                    <Typography>Loading...</Typography>
                  </Box>
                ) : (
                  <TabPanel sx={{ p: 0 }} value={activeTab}>
                    {tabContentList[activeTab]}
                  </TabPanel>
                )}
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      )}
    </Grid>
  )
}

export default PopulationTab
