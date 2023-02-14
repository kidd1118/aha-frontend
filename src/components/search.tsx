import * as React from 'react'
import { useState } from 'react'
import { styled, Typography, useMediaQuery } from '@mui/material'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import Input from './common/input'
import Button from './common/button1'
import Slider from './common/slider'

const Container = styled('div')(() => ({
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
  const matches = useMediaQuery('(orientation:portrait)')
  const [keyword, setKeyword] = useState('')
  const [pageSize, setPageSize] = useState(15)
  const navigate = useNavigate()
  const goToResults = () =>
    navigate({
      pathname: '/results',
      search: `?pageSize=${pageSize}&keyword=${keyword}`,
    })

  return (
    <Container sx={{ paddingLeft: matches ? 0 : 5, paddingRight: matches ? 0 : 5 }}>
      <Typography variant="h6">Search</Typography>
      <Box marginBottom={3}>
        <Input
          value={keyword}
          label="Keyword"
          onChange={(newValue) => setKeyword(newValue.target.value)}
        />
      </Box>
      <AhaDivider />
      <Typography variant="h6" marginTop={3}>
        # Of Results Per Page
      </Typography>
      <Box>
        <Typography variant="h4" display="inline-block">
          {pageSize}
        </Typography>
        <span> </span>
        <Typography display="inline-block">results</Typography>
      </Box>
      <Box>
        <Slider value={pageSize} onChange={(newValue) => setPageSize(newValue)} />
      </Box>
      <AhaDivider />
      <Box marginTop={5}>
        <Button onClick={goToResults}>Search</Button>
      </Box>
    </Container>
  )
}
