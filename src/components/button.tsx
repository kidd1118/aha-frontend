import * as React from 'react'
import Button from '@mui/material/Button'

interface Props {
  children: string
  color: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'inherit' | undefined
  onClick: () => void
}

export default function AhaButton({ children, color, onClick }: Props) {
  return (
    <Button color={color} onClick={onClick}>
      {children}
    </Button>
  )
}
