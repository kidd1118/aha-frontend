import * as React from 'react'
import TextField from '@mui/material/TextField'

interface Props {
  value: string
  label: string
  onChange: (value: any) => void
}

export default function AhaInput({ value, label, onChange }: Props) {
  return <TextField value={value} label={label} onChange={onChange} variant="outlined" />
}
