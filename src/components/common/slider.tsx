import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material'

const CustomeSlider = styled(Slider)(() => ({
  height: 8,
  borderWidth: 0,
  color: '#fff',
  '& .MuiSlider-rail': {
    color: '#fff',
    borderColor: '#fff',
  },
  '& .MuiSlider-track': {
    backgroundImage: 'linear-gradient(to right, rgb(255, 92, 1), rgb(255, 210, 95))',
    border: 'none',
  },
  '& .MuiSlider-mark': {
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-markLabel': {
    color: '#fff',
    opacity: 0.5,
  },
  '& .MuiSlider-thumb': {
    color: '#1B1B1B',
    borderWidth: 4,
    borderColor: '#FFD05D',
    borderStyle: 'solid',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '&:before': {
      display: 'none',
    },
  },
}))

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 50,
    label: '50',
  },
]

interface Props {
  value: number
  onChange: (value: any) => void
}

export default function AhaSlider({ value, onChange }: Props) {
  return (
    <CustomeSlider
      defaultValue={15}
      marks={marks}
      min={3}
      max={50}
      value={value}
      onChange={onChange}
    />
  )
}
