import * as React from 'react'
import { useState } from 'react'
import { styled, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router-dom'
import Input from './common/input'
import Button from './common/button1'
import Slider from './common/slider'

const Box = styled('div')(() => ({
  paddingLeft: 50,
  paddingRight: 50,
  textAlign: 'left',
  height: '100%',
  fontSize: 20,
  '> div': {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 0,
  },
}))

const AhaDivider = styled(Divider)(() => ({
  borderColor: '#fff',
  opacity: 0.1,
}))

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const [pageSize, setPageSize] = useState(15)
  const navigate = useNavigate()
  const goToResults = () =>
    navigate({
      pathname: '/results',
      search: `?pageSize=${pageSize}&keyword=${keyword}`,
    })

  return (
    <Box>
      <div>Search</div>
      <Input
        value={keyword}
        label="Keyword"
        onChange={(newValue) => setKeyword(newValue.target.value)}
      />
      <AhaDivider />
      <div># Of Results Per Page</div>
      <div>
        <Typography variant="h4" display="inline-block">
          {pageSize}
        </Typography>
        <span> results</span>
      </div>
      <Slider value={pageSize} onChange={(newValue) => setPageSize(newValue)} />
      <AhaDivider />
      <div>
        <Button onClick={goToResults}>Search</Button>
      </div>
    </Box>
  )
}
