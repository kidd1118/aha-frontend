import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from '../components/menu'
import Search from '../components/search'
import Friends from '../components/friends '

export default function Page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Menu />
      <Grid container spacing={0}>
        <Grid xs={9} padding={5}>
          <Search />
        </Grid>
        <Grid xs={3}>
          <Friends />
        </Grid>
      </Grid>
    </Box>
  )
}
