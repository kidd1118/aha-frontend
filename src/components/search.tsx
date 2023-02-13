import * as React from 'react'
import { useState } from 'react'
import { styled, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router-dom'
import Input from './common/input'
import Button from './common/button1'
import Slider from './common/slider'

const Box = styled('div')(() => ({
  position: 'relative',
  paddingLeft: 50,
  paddingRight: 50,
  textAlign: 'left',
  height: '100%',
  fontSize: 20,
  '> div, > p': {
    paddingTop: 10,
    paddingBottom: 10,
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
      <Typography variant="h6">Search</Typography>
      <Typography marginBottom={3}>
        <Input
          value={keyword}
          label="Keyword"
          onChange={(newValue) => setKeyword(newValue.target.value)}
        />
      </Typography>
      <AhaDivider />
      <Typography variant="h6" marginTop={3}>
        # Of Results Per Page
      </Typography>
      <Typography>
        <Typography variant="h4" display="inline-block">
          {pageSize}
        </Typography>
        <span> </span>
        <Typography display="inline-block">results</Typography>
      </Typography>
      <Typography>
        <Slider value={pageSize} onChange={(newValue) => setPageSize(newValue)} />
      </Typography>
      <AhaDivider />
      <Typography position="absolute" bottom={0}>
        <Button onClick={goToResults}>Search</Button>
      </Typography>
    </Box>
  )
}
