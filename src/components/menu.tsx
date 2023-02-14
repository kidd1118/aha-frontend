import React from 'react'
import { styled } from '@mui/material/styles'
import { Link, useLocation } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const Bar = styled('div')(() => ({
  position: 'fixed',
  backgroundColor: '#1B1B1B',
  display: 'flex',
  '> a > button > svg > path:hover, > a > button.active > svg > path': {
    fill: '#FFFFFF',
  },
}))

function Icon() {
  return (
    <SvgIcon
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34146 0.00012207C5.51304 0.00012207 4.84146 0.671695 4.84146 1.50012C4.84146 2.32855 5.51304 3.00012 6.34146 3.00012H16.7578V12.4235C16.7578 13.2519 17.4294 13.9235 18.2578 13.9235C19.0863 13.9235 19.7578 13.2519 19.7578 12.4235V2.50012C19.7578 1.11941 18.6386 0.00012207 17.2578 0.00012207H6.34146ZM1 4.91476H14.122C14.6742 4.91476 15.122 5.36247 15.122 5.91476V19.0367C15.122 19.589 14.6742 20.0367 14.122 20.0367H1C0.447715 20.0367 0 19.589 0 19.0367V5.91476C0 5.36247 0.447715 4.91476 1 4.91476Z"
        fill="#8A8A8A"
      />
    </SvgIcon>
  )
}

export default function Menu({ display }: { display: string }) {
  const { pathname } = useLocation()
  const matches = useMediaQuery('(orientation:portrait)')

  return (
    <Bar
      sx={{
        display,
        backgroundColor: '#1B1B1B',
        flexDirection: matches ? 'row' : 'column',
        height: matches ? '66px' : '100%',
        width: matches ? '100%' : '80px',
        bottom: matches ? '0' : '',
        justifyContent: matches ? 'space-evenly' : '',
        alignItems: matches ? 'center' : '',
        paddingTop: matches ? '' : '80px',
        zIndex: 99,
      }}
    >
      <Link to="/">
        <IconButton className={pathname === '/' || pathname === '/results' ? 'active' : ''}>
          <Icon />
        </IconButton>
      </Link>
      <Typography
        variant="caption"
        sx={{
          marginBottom: '20px',
          display: matches ? 'none' : 'block',
        }}
      >
        Home
      </Typography>
      <Link to="/tags">
        <IconButton className={pathname === '/tags' ? 'active' : ''}>
          <Icon />
        </IconButton>
      </Link>
    </Bar>
  )
}
