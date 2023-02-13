import * as React from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'

interface Props {
  children: React.ReactNode
  value: number
  onChange: (value: any) => void
}

const CustomTabs = styled(Tabs)(() => ({
  '& .MuiTab-root': {
    color: '#B2B2B2',
    width: '50%',
    textTransform: 'none',
  },
  '& .Mui-selected': {
    color: '#FFFFFF !important',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#FFFFFF',
  },
}))

export default function AhaTabs({ children, value, onChange }: Props) {
  return (
    <CustomTabs
      value={value}
      onChange={(event: React.SyntheticEvent, newValue: number) => {
        onChange(newValue)
      }}
    >
      {children}
    </CustomTabs>
  )
}
