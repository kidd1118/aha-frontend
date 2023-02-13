import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const CustomeButton = styled(Button)(() => ({
  height: 20,
  border: 1,
  borderRadius: 50,
  borderStyle: 'solid',
  fontSize: 8,
  fontWeight: 600,
  borderColor: '#FFFFFF',
  color: '#000000',
  backgroundColor: '#FFFFFF',
  lineHeight: 1,
  '&.MuiButton-outlined': {
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    backgroundColor: '#121212',
    '&:focus, &:active': {
      backgroundColor: '#121212',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
      color: '#121212',
    },
  },
  '&:focus, &:active': {
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
  },
  '&:hover': {
    backgroundColor: '#121212',
    boxShadow: 'none',
    color: '#FFFFFF',
  },
}))
interface Props {
  children: string
  onClick: () => void
  variant: 'text' | 'outlined' | 'contained' | undefined
}

export default function AhaButton({ children, onClick, variant }: Props) {
  return (
    <CustomeButton
      disableRipple
      color="inherit"
      onClick={onClick}
      variant={variant}
      sx={{ textTransform: 'none' }}
    >
      {children}
    </CustomeButton>
  )
}
