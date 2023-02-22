import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '../components/menu'
import Results from '../components/results'
import Friends from '../components/friends'
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
          zIndex: 100,
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          display: matches ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          paddingTop: '5px',
          zIndex: 99,
          backgroundColor: '#121212',
        }}
      >
        <Link to="/">
          <IconButton color="primary" sx={{ display: 'inline-block' }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_416)">
                <path
                  d="M19.2702 4.10349L17.3333 2.16663L6.5 13L17.3333 23.8333L19.2702 21.8964L10.3737 13L19.2702 4.10349Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_416">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
          <Typography variant="h5" display="inline-block" color="#FFFFFF">
            Home Page
          </Typography>
        </Link>
      </Box>
      <Grid container spacing={0} paddingLeft={matches ? '' : '80px'}>
        <Grid
          item
          xs={matches ? 12 : 9}
          padding={matches ? 2 : 5}
          paddingTop={matches ? 8 : 5}
          minHeight="100vh"
        >
          <Results />
        </Grid>
        <Grid item xs={matches ? 0 : 3}>
          <Friends />
        </Grid>
      </Grid>
    </Box>
  )
}
