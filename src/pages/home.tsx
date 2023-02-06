import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Menu from '../components/menu'
import Search from '../components/search'
import Friends from '../components/friends '

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={1}>
          <Menu />
        </Grid>
        <Grid container xs={11}>
          <Grid xs={8}>
            <Search />
          </Grid>
          <Grid xs="auto">
            <Friends />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
