import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from '../components/menu'
import Tags from '../components/tags'

export default function Page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Menu />
      <Grid container spacing={0}>
        <Grid xs={12} padding={5}>
          <Tags />
        </Grid>
      </Grid>
    </Box>
  )
}
