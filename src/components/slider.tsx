import * as React from 'react'
import Slider from '@mui/material/Slider'

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
    value: 20,
    label: '20',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
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
    <Slider
      defaultValue={30}
      sx={{
        width: 500,
        color: 'success.main',
      }}
      marks={marks}
      min={3}
      max={50}
      value={value}
      onChange={onChange}
    />
  )
}
