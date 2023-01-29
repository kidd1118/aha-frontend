import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

export default function Menu({ direction }: any) {
  //   const { pathname } = useLocation()

  return (
    <div className={`flex flex-${direction} ${direction === 'row' ? 'space-x-10' : 'space-y-5'}`}>
      <Link to="/">
        <IconButton aria-label="delete" disabled color="primary">
          <svg
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
          </svg>
        </IconButton>
        {/* <Icon color={`${pathname.includes('tag') ? '#8A8A8A' : 'white'}`} /> */}
      </Link>
      <Link to="/tags">
        {/* <Icon color={`${pathname.includes('tag') ? 'white' : '#8A8A8A'}`} /> */}
        tags
      </Link>
    </div>
  )
}
