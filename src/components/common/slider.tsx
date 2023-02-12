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
    value: 0,
    label: '3',
  },
  {
    value: 1,
    label: '6',
  },
  {
    value: 2,
    label: '9',
  },
  {
    value: 3,
    label: '12',
  },
  {
    value: 4,
    label: '15',
  },
  {
    value: 5,
    label: '50',
  },
]

interface Props {
  value: number
  onChange: (value: any) => void
}

export default function AhaSlider({ value, onChange }: Props) {
  const defaultValue = 4
  function getLabel(v: number): number {
    const mark: {
      value: number
      label: string
    } = marks.filter((item) => item.value === v)[0]
    return Number(mark.label)
  }
  function getValue(l: number): number {
    const mark: {
      value: number
      label: string
    } = marks.filter((item) => item.label === l.toString())[0]
    return mark.value
  }
  return (
    <CustomeSlider
      defaultValue={defaultValue}
      marks={marks}
      min={0}
      max={5}
      value={getValue(value)}
      onChange={(event, newValue) => {
        onChange(getLabel(Number(newValue)))
      }}
    />
  )
}
