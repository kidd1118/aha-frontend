import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import Menu from '../components/menu'
import Search from '../components/search'
import Friends from '../components/friends '
import Logo from '../components/logo'

export default function Page() {
  const matches = useMediaQuery('(orientation:portrait)')

  return (
    <Box sx={{ display: 'flex', flexDirection: matches ? 'column' : 'row' }}>
      <Menu display="flex" />
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '70px', zIndex: 100 }}>
        <Logo />
      </Box>
      <Grid container spacing={0} paddingLeft={matches ? '' : '80px'}>
        <Grid
          item
          xs={matches ? 12 : 9}
          padding={matches ? 2 : 5}
          paddingTop={matches ? 8 : 5}
          minHeight="100vh"
        >
          <Search />
        </Grid>
        <Grid item xs={3}>
          <Friends />
        </Grid>
      </Grid>
    </Box>
  )
}
