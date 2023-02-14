import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import Menu from '../components/menu'
import Tags from '../components/tags'
import Logo from '../components/logo'

export default function Page() {
  const matches = useMediaQuery('(orientation:portrait)')

  return (
    <Box sx={{ display: 'flex', flexDirection: matches ? 'column' : 'row' }}>
      <Menu display={matches ? 'none' : 'flex'} />
      <Box
        sx={{
          display: matches ? 'none' : 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '70px',
        }}
      >
        <Logo />
      </Box>
      <Grid container spacing={0} paddingLeft={matches ? '' : '80px'}>
        <Grid item padding={matches ? 2 : 5} paddingTop={matches ? 8 : 5} minHeight="100vh">
          <Tags />
        </Grid>
      </Grid>
    </Box>
  )
}
