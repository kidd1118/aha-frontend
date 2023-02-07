import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const CustomeButton = styled(Button)(() => ({
  height: 40,
  width: 340,
  borderWidth: 0,
  color: '#121212',
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  fontWeight: 800,
  '&:focus, &:hover, &:active': {
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
  },
}))
interface Props {
  children: string
  color: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'inherit' | undefined
  onClick: () => void
}

export default function AhaButton({ children, color, onClick }: Props) {
  return (
    <CustomeButton disableRipple color={color} onClick={onClick}>
      {children}
    </CustomeButton>
  )
}
